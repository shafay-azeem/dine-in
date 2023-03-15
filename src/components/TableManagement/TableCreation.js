import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useToast,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import { Heading } from "@chakra-ui/react";
import Form from "react-bootstrap/Form";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { MenuState } from "../../context/MenuContext";

const TableCreation = () => {
  const [number, setNumber] = useState();
  const [tableList, setTableList] = useState();
  const [count, setCount] = useState();

  const toast = useToast();
  //const { tableChanger, setTableChanger } = MenuState(Math.random());
  const [tableChanger, setTableChanger] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    getTableCountbyUserId();
    getTablebyUserId();
  }, [tableChanger]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const createTable = async () => {
    try {
      let data = {
        tablesCount: number,
      };

      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.CREATE_TABLES, data)
        .then((res) => {
          if (res.status == 201) {
            toast({
              position: "top",
              title: `${res.data.message}`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            setTableChanger(Math.random());
            return true;
          } else {
            alert(`There Some Error`);
            return false;
          }
        });
    } catch (err) {
      console.log(err);
      toast({
        position: "top",
        title: `There Some Error`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  async function getTableCountbyUserId() {
    let getTableCountbyUserId = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_TABLE_COUNT_BY_USERID
    );

    let res = getTableCountbyUserId.data.tables;
    setNumber(res);

    return;
  }

  async function getTablebyUserId() {
    let getTables = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_TABLES_BY_USERID
    );

    let res = getTables.data.tables.Table;
    setTableList(res);
    setLoading(true);
  }

  const deleteTableDeleteByTableId = async (tableId) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_TABLE_BY_TABLE_ID + tableId)
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
          setLoading(true);

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
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Table Management
          </Text>
        </GridItem>
      </Grid>

      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "25px",
        }}
      >
        <GridItem w="100%" h="10" mb={3}>
          <FormControl>
            <FormLabel>Table Create</FormLabel>
            <Input
              bg="white"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder="Enter Table Count"
            />
          </FormControl>
        </GridItem>
        <GridItem w="100%" mt={8}>
          <Button colorScheme="teal" onClick={() => createTable()}>
            Create
          </Button>
        </GridItem>
      </Grid>

      {/* <Box>
        <div className="d-grid">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-4">Table Number</Form.Label>
              <Form.Control
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Enter Table Number"
              />
            </Form.Group>
          </Form>
          <Button
            className="mt-4 mb-2"
            colorScheme="blue"
            onClick={() => createTable()}
          >
            Create
          </Button>
        </div>
      </Box> */}

      <Box bg="white" m="8">
        <TableContainer mt={5}>
          <Table variant="simple">
            <Thead backgroundColor="#FAFAFA">
              <Tr>
                <Th>ID</Th>
                <Th>Table Name</Th>
                <Th>Table Number</Th>
                {/* <Th>Date</Th> */}
                <Th>Action</Th>
              </Tr>
            </Thead>

            {loading ? (
              <Tbody>
                {tableList?.map((x, index) => (
                  <Tr key={index}>
                    <Td>{x._id}</Td>
                    <Td>{x.TableName}</Td>
                    <Td>{x.TableNumber}</Td>
                    {/* <Td>{formatDate(x.createdAt.toString())}</Td> */}

                    <Td style={{ textAlign: "center", cursor: "pointer" }}>
                      <HStack>
                        <Box onClick={() => deleteTableDeleteByTableId(x._id)}>
                          <Tooltip label="Delete" placement="top">
                            <Icon as={DeleteIcon} />
                          </Tooltip>
                        </Box>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            ) : (
              <div className="loading-screen">
                <div className="loading-spinner mt-5"> </div>
              </div>
            )}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default TableCreation;
