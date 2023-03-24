import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Switch,
  Radio,
  RadioGroup,
  IconButton,
  useToast,
  Box,
} from "@chakra-ui/react";
import CustomButton from "../../CustomElements/CustomButton";
import { BsFillTrashFill } from "react-icons/bs";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { MenuState } from "../../context/MenuContext";
import { useEffect } from "react";

const LabelModal = (props) => {
  const toast = useToast();
  const [image, setImage] = useState();
  const [label, setLabel] = useState();
  const { labelChanger, setLabelChanger } = MenuState();

  let labelId = props?.id;

  useEffect(() => {
    if (labelId) {
      getSingleLabel();
    }
  }, []);

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
      setImage(data.url.toString());
    } catch (err) {
      console.log(err);
    }
  };

  function deleteimg() {
    setImage(null);
    document.getElementById("img").value = "";
  }

  let labelData = {
    label: label,
    value: label,
    svg: image,
  };

  const createLabel = async () => {
    await apiFunctions
      .POST_REQUEST(BASE_URL + API_URL.CREATE_LABEL, labelData)
      .then((res) => {
        console.log(res, "label res");
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setLabelChanger(Math.random());
          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
          return false;
        }
      });
  };

  const updateLabel = async () => {
    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDATE_LABEL + labelId, labelData)
      .then((res) => {
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setLabelChanger(Math.random());
          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
          return false;
        }
      });
  };

  async function getSingleLabel() {
    let getSingleLabel = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.GET_SINGLE_LABEL + labelId
    );

    let res = getSingleLabel.data.itemLabel;
    console.log(res, "h");

    setLabel(res.label);
    setImage(res.svg);
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add A Label</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontWeight="400">Label Name</FormLabel>
              <Input
                width="100%"
                size="md"
                borderRadius="8px"
                value={label}
                placeholder="Enter a label"
                onChange={(e) => setLabel(e.target.value)}
              />
            </FormControl>

            <FormControl mt={3}>
              <FormLabel fontWeight="400">Upload Your Image</FormLabel>
              <Input
                size="sm"
                type="file"
                onChange={pictureCapture}
                id="img"
                accept=".svg"
              />
              {image && (
                <div>
                  <img
                    className="preview mt-4 mx-auto"
                    src={image}
                    alt=""
                    width="200px"
                    height="200px"
                  />

                  <IconButton
                    onClick={deleteimg}
                    variant="outline"
                    colorScheme="teal"
                    icon={<BsFillTrashFill />}
                  />
                </div>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {props?.id ? (
              <Box>
                {image ? (
                  <CustomButton
                    btnText={"Update"}
                    mr={3}
                    size={"sm"}
                    click={updateLabel}
                  />
                ) : (
                  <Button disabled>Update</Button>
                )}
              </Box>
            ) : (
              <Box>
                {image ? (
                  <CustomButton
                    btnText={"Save"}
                    mr={3}
                    size={"sm"}
                    click={createLabel}
                  />
                ) : (
                  <Button disabled>Save</Button>
                )}
              </Box>
            )}

            <CustomButton
              click={props.onClose}
              btnText={"Cancel"}
              variant={"outline"}
              mr={3}
              size={"sm"}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LabelModal;
