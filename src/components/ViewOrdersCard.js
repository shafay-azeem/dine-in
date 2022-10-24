import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Grid,
  GridItem,
  Box,
  Center,
  Square,
  Circle,
  Text,
  Divider,
} from "@chakra-ui/react";

const ViewOrdersCard = () => {
  return (
    <>
      <Center mt={5}>
        <Box
          bg="white"
          border="1px"
          borderColor="#FAFAFA"
          borderRadius="10"
          w="75%"
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={4} p={1}>
            <GridItem colSpan={2} h="10" p={5}>
              <Text>Recent Orders</Text>
            </GridItem>
            <GridItem colStart={4} colEnd={6} h="10" textAlign="end" p={5}>
              <Text color="blue">View Orders</Text>
            </GridItem>
          </Grid>
          <Divider orientation="horizontal" mt={2} />

          <TableContainer>
            <Table variant="simple">
              <Thead backgroundColor="#FAFAFA">
                <Tr>
                  <Th>ID</Th>
                  <Th>Daily No</Th>
                  <Th>Status</Th>
                  <Th>Type</Th>
                  <Th>Customer/Table</Th>
                  <Th>Waiter</Th>
                  <Th>Update Time</Th>
                  <Th>Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </>
  );
};

export default ViewOrdersCard;
