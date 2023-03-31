import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { MenuState } from "../../context/MenuContext";
import CustomButton from "../../CustomElements/CustomButton";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";

const TableUpdateModal = (props) => {
  const { tableChanger, setTableChanger } = MenuState();
  const toast = useToast();

  let tableId = props?.tableId;
  let tableNumber = props?.tableNumber;

  const [tableName, setTableName] = useState(props?.tableName);
  const updateTableByTableId = async () => {
    let data = {
      TableName: tableName,
    };

    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDATE_TABLE + tableId, data)
      .then((res) => {
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });

          setTableChanger(Math.random());
          props.onClose();
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

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit A Table</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontWeight="400">Table Name</FormLabel>
              <Input
                width="100%"
                size="md"
                borderRadius="8px"
                value={tableName}
                placeholder="Enter a label"
                onChange={(e) => setTableName(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="400">Table Number</FormLabel>
              <Input
                width="100%"
                size="md"
                borderRadius="8px"
                placeholder="Enter a label"
                value={tableNumber}
                disabled
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <CustomButton
              btnText={"Update"}
              mr={3}
              size={"sm"}
              click={updateTableByTableId}
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

export default TableUpdateModal;
