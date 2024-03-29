import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const UpdateUser = () => {
  const toast = useToast();
  const [name, setName] = useState();
  const [item, setItem] = useState("Select");
  console.log(item, "item");
  // const [email, setEmail] = useState();
  const [resName, setResName] = useState();
  const [resImage, setResImage] = useState();

  const [currency, setCurrency] = useState();

  const navigate = useNavigate();

  const {
    isOpen: ModalOpen,
    onOpen: ModalOnOpen,
    onClose: ModalOnClose,
  } = useDisclosure();

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  let userId = localStorage.getItem("user_id");

  //--------------------------------------------
  const options = [
    {
      symbol: "$",
      label: "US Dollar",
      code: "USD",
      name_plural: "US dollars",
    },
    {
      symbol: "€",
      label: "Euro",
      code: "EUR",
      name_plural: "euros",
    },
    {
      symbol: "¥",
      label: "Japanese Yen",
      code: "JPY",
      name_plural: "Japanese yen",
    },
    {
      symbol: "£",
      label: "British Pound Sterling",
      code: "GBP",
      name_plural: "British pounds sterling",
    },
    {
      symbol: "AU$",
      label: "Australian Dollar",
      code: "AUD",
      name_plural: "Australian dollars",
    },
    {
      symbol: "CA$",
      label: "Canadian Dollar",
      code: "CAD",
      name_plural: "Canadian dollars",
    },
    {
      symbol: "CHF",
      label: "Swiss Franc",
      code: "CHF",
      name_plural: "Swiss francs",
    },
    {
      symbol: "CHF",
      label: "Swiss Franc",
      code: "CHF",
      name_plural: "Swiss francs",
    },
  ];

  const [value, setValue] = useState();
  // console.log(value, "value");
  console.log(currency, "currency");

  console.log(options[0], "options[0]");

  // let currSymbol = value;

  //-----------------------------------------------------------

  const submitHandler = async () => {
    if (!name) {
      //alert("Please Enter All Fields");
      toast({
        position: "top",
        title: `You Haven't Updated Any Information`,
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    try {
      let userData = {
        name: name,
        // email: email,
        resName: resName,
        resImage: resImage,
        currencySymbol: value,
      };

      await apiFunctions
        .PUT_REQUEST(BASE_URL + API_URL.UPDATE_PROFILE, userData)
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Updated SuccessFully`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            setName("");
            // setEmail("");
            setResImage("");
            setResName("");
            localStorage.setItem("currencySymbol", value?.symbol);
            navigate("/homeScreen");

            return true;
          } else {
            alert(`There Some Error---`);
            return false;
          }
        });
    } catch (err) {
      toast({
        position: "top",
        title: `There Some Error`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const pictureCapture = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "dineInApp");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkq6jers7/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await res.json();
      setResImage(data.url.toString());
    } catch (err) {
      console.log(err);
    }
  };

  function deleteimg() {
    setResImage(null);
    document.getElementById("img").value = "";
  }

  async function getRestaurantDetail() {
    try {
      let restaurantDetail = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_RESTURANT_DETAIL + userId
      );
      let res = restaurantDetail.data.user;

      setResName(res.resName);
      setResImage(res.resImage);
      // setEmail(res.email);
      setName(res.name);
      setCurrency(res.currencySymbol);
    } catch (err) {
      console.log("An error occurred while fetching menus", err.message);
    }
  }

  return (
    <Container maxW="xl" centerContent marginTop="4rem">
      <Box
        p={4}
        bg={"white"}
        w="100%"
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <VStack spacing="5px">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormControl>

          {/* <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl> */}

          {currency ? (
            <div className="w-100">
              <FormLabel>Choose Currency</FormLabel>
              <Select
                options={options}
                onChange={setValue}
                defaultValue={currency}
              />
            </div>
          ) : null}

          <FormControl id="name" isRequired>
            <FormLabel>Restaurant Name</FormLabel>
            <Input
              placeholder="Enter Your Restaurant Name"
              onChange={(e) => setResName(e.target.value)}
              value={resName}
            />
          </FormControl>

          <FormControl mt={3}>
            <FormLabel>Upload Your Image</FormLabel>
            <Input
              size="sm"
              type="file"
              accept=".jpg,.png"
              onChange={pictureCapture}
              id="img"
            />
            {resImage && (
              <div>
                <img
                  className="preview mt-4 mx-auto"
                  src={resImage}
                  alt=""
                  width="200px"
                  height="200px"
                  onClick={ModalOnOpen}
                />

                <IconButton
                  onClick={deleteimg}
                  variant="outline"
                  colorScheme="teal"
                  icon={<BsFillTrashFill />}
                />
              </div>
            )}
            <Modal isOpen={ModalOpen} onClose={ModalOnClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />

                <ModalBody>
                  <Center>
                    <div>
                      <img className="preview p-5" src={resImage} alt="" />
                    </div>
                  </Center>
                </ModalBody>
              </ModalContent>
            </Modal>
          </FormControl>

          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
          >
            Update
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default UpdateUser;
