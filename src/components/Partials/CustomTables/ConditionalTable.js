import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MenuState } from "../../../context/MenuContext";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import LabelModal from "../../MenuManagement/LabelModal";

const ConditionalTable = (props) => {
  const toast = useToast();
  const [labelList, setLabelList] = useState([]);
  const [count, setCount] = useState();
  const { labelChanger, setLabelChanger } = MenuState();
  const {
    isOpen: labelIsOpen,
    onOpen: labelOnOpen,
    onClose: labelOnClose,
  } = useDisclosure();

  useEffect(() => {
    getLabels();
  }, [labelChanger]);

  async function getLabels() {
    let getLabels = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_LABEL
    );

    let res = getLabels.data.label.itemLabel;
    setLabelList(res);
  }

  const getIndex = (id) => {
    setCount(id);
  };

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_LABEL_BY_LABELID + id)
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

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>Label Name</Th>
              <Th>Svg</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {labelList?.map((x, index) => (
              <Tr key={index}>
                <Td>{x.label}</Td>
                <Td>{x.svg}</Td>
                <Td>
                  <div className="d-flex align-items-center">
                    <Box className="mt-1 me-2">
                      <BsFillTrashFill
                        cursor="pointer"
                        onClick={() => handleRemove(x._id)}
                      />
                    </Box>

                    <Box className="me-2" onClick={() => getIndex(x._id)}>
                      <EditIcon cursor="pointer" onClick={labelOnOpen} />
                    </Box>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {labelIsOpen ? (
          <LabelModal
            isOpen={labelIsOpen}
            onOpen={labelOnOpen}
            onClose={labelOnClose}
            id={count}
          />
        ) : null}
      </TableContainer>
    </>
  );
};

export default ConditionalTable;
