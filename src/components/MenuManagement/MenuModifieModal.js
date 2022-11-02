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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const MenuModifieModal = (props) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";
  const [inputList, setInputList] = useState([]);


  const removebt = (x) => {
    // console.log(x)
    // // /
    // var z = inputList.length
    // var k = inputList.length + 1
    // console.log(z, 'zz')
    // console.log(k, 'kkk')
    var y = (inputList.splice(0, inputList.length))
    setInputList(y)
    // // }
    // let position = inputList.length
    // for (let i = 0; i < inputList.length - 1; i++) {
    //   console.log(inputList[i], 'ssss')
    // }


    // console.log(inputList.length)
    // console.log(inputList.values)
    // console.log(inputList.pop)

  }

  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <HStack m={5}>
          <Input size="sm" borderRadius="8px" width="60%" placeholder="Name" />
          ,
          <Input
            key={inputList + 1}
            type="tel"
            placeholder="$"
            size="sm"
            borderRadius="8px"
            width="20%"
          />
          <Input
            type="tel"
            placeholder="calories"
            size="sm"
            borderRadius="8px"
            width="40%"
          />
          <Switch />
          <Button
            colorScheme="teal"
            variant="solid"
            mt={2}
            size="xs"
            onClick={removebt}
          >
            Remove
          </Button>
        </HStack>
      )
    );
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
              <FormControl isInvalid={isError}>
                <FormLabel fontWeight="400">Group Name</FormLabel>
                <Input
                  width="50%"
                  size="sm"
                  borderRadius="8px"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isError ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>Group Name is required.</FormErrorMessage>
                )}
              </FormControl>
            </Center>
            <Text mt={6}>Modifiers</Text>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="teal"
              variant="outline"
              mt={2}
              size="xs"
              onClick={onAddBtnClick}
            >
              Add more Modifier
            </Button>

            {inputList}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} size="sm">
              Save
            </Button>
            <Button onClick={props.onClose} size="sm">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuModifieModal;
