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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MenuState } from "../../../context/MenuContext";
import ViewFeedBacks from "../../FeedBacks/ViewFeedBacks";

const ResultTable = () => {
  const {
    createfeedback,
    setCreateFeedback,
    feedback,
    setFeedback,
    activeForm,
    setActiveForm,
  } = MenuState();

  const {
    isOpen: ViewFeedBackIsOpen,
    onOpen: ViewFeedBackOnOpen,
    onClose: ViewFeedBackOnClose,
  } = useDisclosure();

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
                  <Td>{x.createdDate}</Td>
                  <Td>{x.formName}</Td>

                  <Td style={{ textAlign: "center", cursor: "pointer" }}>
                    <Icon onClick={ViewFeedBackOnOpen} as={ViewIcon} />
                  </Td>
                  {ViewFeedBackIsOpen ? (
                    <ViewFeedBacks
                      isOpen={ViewFeedBackIsOpen}
                      onOpen={ViewFeedBackOnOpen}
                      onClose={ViewFeedBackOnClose}
                      index={index}
                    />
                  ) : (
                    console.log("ss")
                  )}
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
