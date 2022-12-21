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

  // console.log(activeForm, "activeForm");
  // console.log(feedback, "feedback");
  // console.log(createfeedback[activeForm]?.formQuestions, "createfeedback");

  // let feedbackgg = createfeedback[activeForm]?.formQuestions;

  // for (let i = 0; i <= feedbackgg.length; i++) {
  //   console.log(feedbackgg[i].id, "ff");
  //   // let's divide the value by 2
  //   // if the remainder is zero then it's an even number
  //   if (i % 2 == 0) {
  //     console.log(i, "even");
  //   }
  // }

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
