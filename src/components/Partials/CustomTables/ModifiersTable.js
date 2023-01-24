import {
  Box,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { MenuState } from "../../../context/MenuContext";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import MenuModifieModal from "../../MenuManagement/MenuModifieModal";

import { useToast } from "@chakra-ui/react";

const ModifiersTable = () => {
  const toast = useToast();
  const { modifier, setModifier } = MenuState();
  const [count, setCount] = useState();
  const {
    isOpen: modifierIsOpen,
    onOpen: modifierOnOpen,
    onClose: modifierOnClose,
  } = useDisclosure();

  useEffect(() => {
    getAllModifiers();
  }, [modifier]);

  async function getAllModifiers() {
    let getModifier = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_MODIFIER
    );

    let res = getModifier.data.modifier;
    console.log(modifier);
    setModifier(res);
  }

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_MODIFIER_BY_ID + id)
      .then((res) => {
        if (res.data.success == true) {
          //alert(`${res.data.message}`);
          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          return true;
        } else {
          //alert(`There Some Error`);
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return false;
        }
      });
  };

  const getIndex = (id) => {
    setCount(id);
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>Group Name</Th>
              <Th>Modifiers</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {modifier?.map((x, index) => {
              return (
                <Tr key={index}>
                  <Td>{x.Groupname}</Td>

                  <Td>
                    {x.modifiers?.map((y, index) => {
                      return <span key={index}>{y.Name},</span>;
                    })}
                  </Td>

                  <Td>
                    <IconButton
                      onClick={() => handleRemove(x._id)}
                      variant="outline"
                      colorScheme="teal"
                      icon={<BsFillTrashFill />}
                    />

                    <Box onClick={() => getIndex(x._id)}>
                      <IconButton
                        onClick={modifierOnOpen}
                        colorScheme="teal"
                        icon={<BsFillTrashFill />}
                      />
                    </Box>
                    {modifierIsOpen ? (
                      <MenuModifieModal
                        isOpen={modifierIsOpen}
                        onOpen={modifierOnOpen}
                        onClose={modifierOnClose}
                        modifier_id={count}
                      />
                    ) : null}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ModifiersTable;
