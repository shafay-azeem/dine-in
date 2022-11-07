import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const ResultTable = () => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>Results</Th>
              <Th>Date</Th>
              <Th>Form</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Text textAlign="center">No Data</Text>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ResultTable;
