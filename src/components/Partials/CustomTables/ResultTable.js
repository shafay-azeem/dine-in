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
  const {
    createfeedback,
    setCreateFeedback,
    feedback,
    setFeedback,
    activeForm,
    setActiveForm,
  } = MenuState();

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
            {feedback?.map((x, index) => {
              return (
                <Tr key={index}>
                  <Td>{x.formId}</Td>
                  <Td>
                    {x.createdDate}
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
