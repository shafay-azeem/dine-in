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
  Input,
  Center,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Switch,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import CustomButton from "../../CustomElements/CustomButton";
import { BsPlusLg } from "react-icons/bs";
import { MenuState } from "../../context/MenuContext";

const MenuModifieModal = (props) => {
  const [input, setInput] = useState("");
  const { modifier, setModifier } = MenuState();
  const [groupName, setGroupName] = useState();

  const [inputList, setInputList] = useState([
    { Name: "", Price: "", Calorie: "" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { Name: "", Price: "", Calorie: "" }]);
  };

  let modifierData = {
    Groupname: groupName,
    modifiers: inputList,
  };

  const modifierCreate = () => {
    modifier.push(modifierData);
    alert("modifier Form Created Successfully");
  };

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Modifier Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Center>
              <FormControl mt={3}>
                <FormLabel fontWeight="400">Group Name</FormLabel>
                <Input
                  type="text"
                  width="50%"
                  size="sm"
                  borderRadius="8px"
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </FormControl>
            </Center>
            {inputList.map((x, i) => {
              return (
                <Box key={i} mt={5}>
                  <HStack>
                    <Input
                      borderRadius="8px"
                      placeholder="Name"
                      name="Name"
                      size="sm"
                      type="text"
                      value={x.Name}
                      width="30%"
                      onChange={(e) => handleInputChange(e, i)}
                    />

                    <Input
                      borderRadius="8px"
                      placeholder="Price"
                      size="sm"
                      name="Price"
                      type="text"
                      value={x.Price}
                      width="30%"
                      onChange={(e) => handleInputChange(e, i)}
                    />

                    <Input
                      borderRadius="8px"
                      placeholder="Calorie"
                      size="sm"
                      name="Calorie"
                      type="text"
                      width="30%"
                      value={x.Calorie}
                      onChange={(e) => handleInputChange(e, i)}
                    />

                    {inputList.length !== 1 && (
                      <IconButton
                        size="xs"
                        variant="outline"
                        colorScheme="blue"
                        onClick={() => handleRemoveClick(i)}
                        icon={<CloseIcon />}
                      />
                    )}

                    {inputList.length - 1 === i && (
                      <IconButton
                        size="xs"
                        variant="outline"
                        colorScheme="blue"
                        onClick={handleAddClick}
                        icon={<AddIcon />}
                      />
                    )}
                  </HStack>
                </Box>
              );
            })}
          </ModalBody>
          <ModalFooter>
            <CustomButton
              btnText={"Save"}
              mr={3}
              size={"sm"}
              click={modifierCreate}
            />

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

export default MenuModifieModal;
