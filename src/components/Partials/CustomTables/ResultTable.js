import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
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
import { useState } from "react";
import { useEffect } from "react";
import { MenuState } from "../../../context/MenuContext";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import ViewFeedBacks from "../../FeedBacks/ViewFeedBacks";
import Pagination from "../Pagination";

const ResultTable = () => {
  const [count, setCount] = useState();
  const {
    createfeedback,
    setCreateFeedback,
    feedback,
    setFeedback,
    activeForm,
    setActiveForm,
    getResults,
    setGetResults,
  } = MenuState();

  const {
    isOpen: ViewFeedBackIsOpen,
    onOpen: ViewFeedBackOnOpen,
    onClose: ViewFeedBackOnClose,
  } = useDisclosure();

  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    getAllResults();
    setGetResults(true);
  }, [getResults, currentPage]);

  async function getAllResults() {
    let getResults = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_RESULTS + `?page=${currentPage}`
    );

    let res = getResults.data.formResponse;
    console.log(res, "res result");
    console.log(getResults.data.formResponseCount, "hhh");
    setTotalResults(getResults.data.formResponseCount);
    setFeedback(res);
  }

  const getIndex = (index) => {
    setCount(index);
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // console.log(pageNumber, "pageNumber");
  };

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
                  <Td>{formatDate(x.createdAt.toString())}</Td>
                  <Td>{x.formName}</Td>

                  <Td style={{ textAlign: "center", cursor: "pointer" }}>
                    <Box onClick={() => getIndex(index)}>
                      <Icon onClick={ViewFeedBackOnOpen} as={ViewIcon} />
                    </Box>
                  </Td>
                  {ViewFeedBackIsOpen ? (
                    <ViewFeedBacks
                      isOpen={ViewFeedBackIsOpen}
                      onOpen={ViewFeedBackOnOpen}
                      onClose={ViewFeedBackOnClose}
                      index={count}
                    />
                  ) : null}
                </Tr>
              );
            })}
          </Tbody>
        </Table>

        <Pagination
          total={totalResults}
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </TableContainer>
    </>
  );
};

export default ResultTable;
