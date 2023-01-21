import React, { useEffect, useState } from "react";
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
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { MenuState } from "../../context/MenuContext";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";

const MenuModifieModal = (props) => {
  let modifier_id = props.modifier_id;
  // console.log(modifier_id);

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

  const modifierCreate = async () => {
    await apiFunctions
      .POST_REQUEST(BASE_URL + API_URL.CREATE_MODIFIER, modifierData)
      .then((res) => {
        if (res.data.success == true) {
          alert(`${res.data.message}`);

          return true;
        } else {
          alert(`There Some Error`);
          return false;
        }
      });
    // modifier.push(modifierData);
    // alert("modifier Form Created Successfully");
  };

  const updatedModifier = async (id) => {
    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDATE_MODIFIER + id, modifierData)
      .then((res) => {
        if (res.data.success == true) {
          alert(`${res.data.message}`);
          return true;
        } else {
          alert(`There Some Error`);
          return false;
        }
      });
  };

  useEffect(() => {
    if (modifier_id) {
      getModifierByID();
    }
    return;
  }, []);

  async function getModifierByID() {
    let getModifier = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.GET_MODIFIER_BY_ID + modifier_id
    );

    let setVar = getModifier.data.modifier;

    setGroupName(setVar.Groupname);
    setInputList(setVar.modifiers);
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          {props?.modifier_id ? (
            <ModalHeader>Edit {groupName}</ModalHeader>
          ) : (
            <ModalHeader>Add a Modifier Group</ModalHeader>
          )}

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
                  value={groupName}
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
            {props?.modifier_id ? (
              <Button
                colorScheme="blue"
                onClick={() => {
                  updatedModifier(modifier_id);
                }}
              >
                Update
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                onClick={() => {
                  modifierCreate();
                }}
              >
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuModifieModal;
