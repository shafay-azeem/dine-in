import { ViewIcon } from "@chakra-ui/icons";
import {
  Icon,
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
import { MenuState } from "../../../context/MenuContext";

const ResultTable = () => {
  const { createfeedback, setCreateFeedback } = MenuState();
  // const data = [
  //   {
  //     ID: 1,
  //     Result: "Passed",
  //     Date: "12-01-22",
  //     Form: "I am form",
  //     Action: "Result",
  //   },
  //   {
  //     ID: 2,
  //     Result: "Failed",
  //     Date: "13-01-22",
  //     Form: "I am form",
  //     Action: "Result",
  //   },
  //   {
  //     ID: 3,
  //     Result: "Passed",
  //     Date: "11-01-22",
  //     Form: "I am form",
  //     Action: "Result",
  //   },
  // ];
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr style={{ textAlign: "center" }}>
              <Th>Results</Th>
              <Th>Date</Th>
              <Th>Form</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {createfeedback?.map((x, index) => {
              return (
                <Tr key={index}>
                  <Td>Form {x.id}</Td>
                  <Td>
                    {x.createdDate} {x.createdTime}
                  </Td>
                  <Td>{x.formName}</Td>
                  <Td style={{ textAlign: "center", cursor: "pointer" }}>
                    <Icon as={ViewIcon} />
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

export default ResultTable;
