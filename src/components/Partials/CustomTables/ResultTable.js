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
  const data = [
    {
      ID: 1,
      Result: "Passed",
      Date: "12-01-22",
      Form: "I am form",
      Action: "Result",
    },
    {
      ID: 2,
      Result: "Failed",
      Date: "13-01-22",
      Form: "I am form",
      Action: "Result",
    },
    {
      ID: 3,
      Result: "Passed",
      Date: "11-01-22",
      Form: "I am form",
      Action: "Result",
    },
  ];
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
            {data.map((x, index) => (
              <Tr key={index}>
                <Td>{x.Result}</Td>
                <Td>{x.Date}</Td>
                <Td>{x.Form}</Td>
                <Td>{x.Action}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ResultTable;
