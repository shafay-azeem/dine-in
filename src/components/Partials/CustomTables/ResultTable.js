import { ArrowForwardIcon, ViewIcon } from "@chakra-ui/icons";
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
import CustomButton from "../../../CustomElements/CustomButton";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import ViewFeedBacks from "../../FeedBacks/ViewFeedBacks";
import Pagination from "../Pagination";
import XLSX from "sheetjs-style";

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
    // console.log(getResults.data.formResponseCount, "hhh");
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

  function exportToExcel(data) {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    // Iterate over each object in the data array and create a new worksheet for each one
    data.forEach((obj, index) => {
      // Create a new worksheet and add it to the workbook
      console.log(obj.response, "ssssssssss");
      const worksheet = XLSX.utils.json_to_sheet(obj.response);
      XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        `Response ${index + 1}`
      );
    });
    // Convert the workbook to an Excel file and download it
    const excelFile = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "binary",
    });
    const fileName = "response_data.xlsx";
    const buffer = new ArrayBuffer(excelFile.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < excelFile.length; i++) {
      view[i] = excelFile.charCodeAt(i) & 0xff;
    }
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <TableContainer>
        <Box align="end" mt={2} mb={2}>
          <CustomButton
            btnText={"Export"}
            leftIcon={<ArrowForwardIcon />}
            click={() => exportToExcel(feedback)}
          />
        </Box>

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
