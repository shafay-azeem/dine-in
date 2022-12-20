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
import CustomButton from "../../CustomElements/CustomButton";
import { BsPlusLg } from "react-icons/bs";
import { MenuState } from "../../context/MenuContext";

const MenuModifieModal = (props) => {
  const [input, setInput] = useState("");
  //const handleInputChange = (e) => setInput(e.target.value);
  const { modifier, setModifier } = MenuState();
  const [groupName, setGroupName] = useState();
  // console.log(groupName, "groupName");

  // const isError = input === "";

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
    console.log(modifier, "modifier data");
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
              {/* <FormControl isInvalid={isError}>
                <FormLabel fontWeight="400">Group Name</FormLabel>
                <Input
                  width="50%"
                  size="sm"
                  borderRadius="8px"
                  value={input}
                  onChange={(e) => setGroupName(e.target.value)}
                />
                {!isError ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>Group Name is required.</FormErrorMessage>
                )}
              </FormControl> */}
            </Center>
            {inputList.map((x, i) => {
              return (
                <div className="box">
                  <input
                    name="Name"
                    placeholder="Name"
                    value={x.Name}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <input
                    className="ml10"
                    name="Price"
                    placeholder="Price"
                    value={x.Price}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <input
                    className="ml10"
                    name="Calorie"
                    placeholder="Calorie"
                    value={x.Calorie}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <div className="btn-box">
                    {inputList.length !== 1 && (
                      <button
                        className="mr10"
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </button>
                    )}
                    {inputList.length - 1 === i && (
                      <button onClick={handleAddClick}>Add</button>
                    )}
                  </div>
                </div>
              );
            })}
            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
            {/* <Text mt={6}>Modifiers</Text> */}

            {/* <CustomButton
              click={onAddBtnClick}
              btnText={" Add more Modifier"}
              variant={"outline"}
              leftIcon={<BsPlusLg />}
              mt={3}
              size={"xs"}
            />

            {inputList} */}
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
