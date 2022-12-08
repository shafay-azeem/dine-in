import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Stack,
  Switch,
  TabPanel,
  TabPanels,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  DeleteIcon,
  EditIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "../../App.css";
import FeedbackDeleteModal from "./FeedbackDeleteModal";
import CreateFormModal from "./CreateFormModal";
import ResultTable from "../Partials/CustomTables/ResultTable";
import CustomButton from "../../CustomElements/CustomButton";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import excelData from "../Orders/Export.json";
import { MenuState } from "../../context/MenuContext";

const Feedbacks = () => {
  const handle = useFullScreenHandle();
  const { createfeedback, setCreateFeedback } = MenuState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showform, setShowForm] = useState(false);
  const [showresult, setShowResult] = useState(true);
  const [feedbackFormList, setFeedbackFormList] = useState(createfeedback);

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileName = "Excel Export";
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  function reload() {
    window.location.reload();
  }

  const {
    isOpen: formIsOpen,
    onOpen: formOnOpen,
    onClose: formOnClose,
  } = useDisclosure();

  function testfucn1() {
    setShowForm(false);
    setShowResult(true);
  }

  function testfucn2() {
    setShowForm(true);
    setShowResult(false);
  }

  function reload() {
    window.location.reload();
    // return false;
  }

  const handleRemove = (index) => {
    createfeedback.splice(index, 1);
    setCreateFeedback([...createfeedback]);
    setFeedbackFormList(createfeedback);
  };

  return (
    <>
      <FullScreen handle={handle}>
        <Grid>
          <GridItem w="100%" bg="white" height="120%">
            <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
              Feedbacks
            </Text>
          </GridItem>
        </Grid>

        {showresult ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={6} m={10}>
            <GridItem w="100%" h="10" colSpan={1}>
              <Text fontWeight={600}>0 results Listed</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                bg="white"
              />
            </GridItem>
            <GridItem w="100%" h="10">
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                bg="white"
              />
            </GridItem>

            <GridItem w="100%" h="10">
              <Stack direction={["column", "row"]} spacing="24px">
                <Box w="100px" h="40px">
                  <CustomButton
                    btnText={"Export"}
                    leftIcon={<ArrowForwardIcon />}
                    click={(e) => exportToExcel(fileName)}
                  />
                </Box>
                <Box w="100px" h="40px">
                  <CustomButton
                    click={reload}
                    btnText={"Reload"}
                    variant={"outline"}
                    leftIcon={<RepeatIcon />}
                  />
                </Box>
              </Stack>
            </GridItem>
          </Grid>
        ) : (
          console.log("sss")
        )}

        {showform ? (
          <Grid templateColumns="repeat(5, 1fr)" gap={4} m={10}>
            <GridItem colSpan={2} h="10">
              <Text fontWeight={600}>0 forms listed</Text>
            </GridItem>
            <GridItem colStart={4} colEnd={6} h="10" textAlign="right">
              <CustomButton click={formOnOpen} btnText={"Create Form"} />
              {formIsOpen ? (
                <CreateFormModal
                  isOpen={formIsOpen}
                  onOpen={formOnOpen}
                  onClose={formOnClose}
                />
              ) : (
                console.log("create form cant open")
              )}
            </GridItem>
          </Grid>
        ) : (
          console.log("Sss")
        )}

        <Box m="10">
          <Tabs w="100%">
            <TabList>
              <Tab onClick={testfucn1}>Results</Tab>
              <Tab onClick={testfucn2}>Forms</Tab>
            </TabList>

            <TabPanels>
              <TabPanel backgroundColor="white" m={5}>
                <ResultTable />
              </TabPanel>

              <TabPanel>
                {feedbackFormList?.map((x, index) => {
                  return (
                    <Box h="90px" bg="white" borderRadius={6} mt={2}>
                      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                        <GridItem colSpan={2}>
                          <Text p={8}>{x.formName}</Text>
                        </GridItem>
                        <GridItem
                          colStart={4}
                          colEnd={6}
                          h="10"
                          align="end"
                          p={8}
                        >
                          <Switch id="email-alerts" mr={4} />
                          <Tooltip label="Edit">
                            <EditIcon mr={4} />
                          </Tooltip>

                          <Button onClick={onOpen} bg="white">
                            <DeleteIcon onClick={() => handleRemove(index)} />

                            {isOpen ? (
                              <FeedbackDeleteModal
                                isOpen={isOpen}
                                onOpen={onOpen}
                                onClose={onClose}
                                index={index}
                              />
                            ) : (
                              console.log("ss")
                            )}
                          </Button>
                        </GridItem>
                      </Grid>
                    </Box>
                  );
                })}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </FullScreen>
    </>
  );
};

export default Feedbacks;
