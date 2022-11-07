import {
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const ConditionalTable = (props) => {
  return (
    <>
      {props.number == 1 ? (<TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>Discount Code</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Text textAlign="center">No Data</Text>
          </Tbody>
        </Table>
      </TableContainer>) : (<TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>Promotion Name</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Text textAlign="center">No Data</Text>
          </Tbody>
        </Table>
      </TableContainer>)}

    </>
  );
};

export default ConditionalTable;
