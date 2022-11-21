import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { MenuState } from "../../context/MenuContext";
import CustomButton from "../../CustomElements/CustomButton";

const CreateMenuDrawer = (props) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { response, setResponse } = MenuState();

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  let menuResponse = {
    id: getTimestampInSeconds(),
    menuName: name,
    menuDescription: description,
    section: [],
    itemMenu: []
  };

  const menuCreate = () => {
    response.push(menuResponse);
    alert("Menu Created Successfully");
  };

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your menu</DrawerHeader>

          <DrawerBody>
            <FormControl isRequired>
              <FormLabel fontWeight="400">Name</FormLabel>
              <Input type="text" onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight="400">Description</FormLabel>
              <Textarea onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <CustomButton
              click={props.onClose}
              btnText={"Cancle"}
              variant={"outline"}
              mr={3}
              size={"sm"}
            />
            <CustomButton
              click={() => {
                menuCreate();
              }}
              btnText={"Save"}
              variant={"outline"}
              mr={3}
              size={"sm"}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CreateMenuDrawer;
