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

const UpdateUser = () => {
  const toast = useToast();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [resName, setResName] = useState();
  const [resImage, setResImage] = useState();
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

  const submitHandler = async () => {
    if (!name && !email) {
      //alert("Please Enter All Fields");
      toast({
        position: "top",
        title: `You Haven't Updated Any Information`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    try {
      let userData = {
        name: name,
        email: email,
        resName: resName,
        resImage: resImage,
      };

      await apiFunctions
        .PUT_REQUEST(BASE_URL + API_URL.UPDATE_PROFILE, userData)
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Updated SuccessFully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setName("");
            setEmail("");
            setResImage("");
            setResName("");
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
        duration: 9000,
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
      setEmail(res.email);
      setName(res.name);
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

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="name" isRequired>
            <FormLabel>Restaurant Name</FormLabel>
            <Input
              placeholder="Enter Your Restaurant Name"
              onChange={(e) => setResName(e.target.value)}
              value={resName}
            />
          </FormControl>

          <FormControl mt={3}>
            <FormLabel fontWeight="400">Upload Your Image</FormLabel>
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
