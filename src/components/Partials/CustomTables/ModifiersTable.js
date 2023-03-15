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
import { EditIcon } from "@chakra-ui/icons";

const ModifiersTable = () => {
  const toast = useToast();
  const { modifier, setModifier } = MenuState();
  const [update, setUpdate] = useState(true);
  const [count, setCount] = useState();
  const {
    isOpen: modifierIsOpen,
    onOpen: modifierOnOpen,
    onClose: modifierOnClose,
  } = useDisclosure();
  let changer = Math.random();

  useEffect(() => {
    // setUpdate(false)
    getAllModifiers();
  }, [changer]);

  async function getAllModifiers() {
    let getModifier = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_MODIFIER
    );

    let res = getModifier.data.modifier;
    // console.log(modifier);
    setUpdate(true);
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
            duration: 1000,
            isClosable: true,
          });

          return true;
        } else {
          //alert(`There Some Error`);
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
                    <div className="d-flex align-items-center">
                      {/* <IconButton
                      onClick={() => handleRemove(x._id)}
                      variant="outline"
                      colorScheme="teal"
                      icon={<BsFillTrashFill />}
                    /> */}
                      <Box className="mt-1 me-2">
                        <BsFillTrashFill
                          onClick={() => handleRemove(x._id)}
                          cursor="pointer"
                        />
                      </Box>

                      <Box onClick={() => getIndex(x._id)} className="me-2">
                        {/* <IconButton
                        onClick={modifierOnOpen}
                        colorScheme="teal"
                        icon={<BsFillTrashFill />}
                      /> */}
                        <EditIcon onClick={modifierOnOpen} cursor="pointer" />
                      </Box>
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>

        {modifierIsOpen ? (
          <MenuModifieModal
            isOpen={modifierIsOpen}
            onOpen={modifierOnOpen}
            onClose={modifierOnClose}
            modifier_id={count}
          />
        ) : null}
      </TableContainer>
    </>
  );
};

export default ModifiersTable;
