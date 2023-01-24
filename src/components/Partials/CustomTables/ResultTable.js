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
import { useEffect } from "react";
import { MenuState } from "../../../context/MenuContext";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import ViewFeedBacks from "../../FeedBacks/ViewFeedBacks";

const ResultTable = () => {
  const {
    createfeedback,
    setCreateFeedback,
    feedback,
    setFeedback,
    activeForm,
    setActiveForm,
    getResults,
    setGetResults
  } = MenuState();

  const {
    isOpen: ViewFeedBackIsOpen,
    onOpen: ViewFeedBackOnOpen,
    onClose: ViewFeedBackOnClose,
  } = useDisclosure();

  useEffect(() => {
    getAllResults();
    setGetResults(true)
  }, [getResults]);

  async function getAllResults() {
    let getResults = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_RESULTS
    );

    let res = getResults.data.formResponse;
    console.log(res, "form response");
    setFeedback(res);
  }

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
                  <Td>{x._id}</Td>
                  <Td>{x.createAt}</Td>
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
                  ) : null}
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
