import React, { useEffect, useState } from "react";
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
import { createSearchParams, useNavigate } from "react-router-dom";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";

const Feedbacks = () => {
  const navigate = useNavigate();
  const handle = useFullScreenHandle();
  // const { createfeedback, setCreateFeedback, activeForm, setActiveForm } =
  //   MenuState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showform, setShowForm] = useState(false);
  const [showresult, setShowResult] = useState(true);

  const [feedbackFormList, setFeedbackFormList] = useState();
  // const [feedbackFormList, setFeedbackFormList] = useState(createfeedback);

  const [count, setCount] = useState();

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
    // window.location.reload();
    // return false;
  }

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_FEEDBACK_FORM_BY_ID + id)
      .then((res) => {
        if (res.data.success == true) {
          alert(`${res.data.message}`);
          return true;
        } else {
          alert(`There Some Error`);
          return false;
        }
      });
    // if (window.confirm("Do you really want to leave?")) {
    //   createfeedback.splice(index, 1);
    //   setCreateFeedback([...createfeedback]);
    //   setFeedbackFormList(createfeedback);
    // }
  };

  const getIndex = (id) => {
    // console.log(id);
    // setCount(id);
    // console.log(count, "count");
    // setCreateFeedback([...createfeedback]);
    // setFeedbackFormList(createfeedback);
  };

  const editForm = (id) => {
    navigate({
      pathname: "/editform",
      search: createSearchParams({ id }).toString(),
    });
  };

  const switchStatus = (index) => {
    // for (let i = 0; i < createfeedback.length; i++) {
    //   if (index === i) {
    //     createfeedback[index].active = !createfeedback[i].active;
    //     setCreateFeedback([...createfeedback]);
    //     if (createfeedback[index].active == false) {
    //       setActiveForm("");
    //     } else {
    //       setActiveForm(index);
    //     }
    //   } else {
    //     createfeedback[i].active = false;
    //     setCreateFeedback([...createfeedback]);
    //   }
    // }
  };

  useEffect(() => {
    getAllFeedbackForm();
  }, []);

  async function getAllFeedbackForm() {
    let geFeedbackForms = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_FEEDBACK_FORM
    );

    let res = geFeedbackForms.data.feedbackForm;
    console.log(res);
    setFeedbackFormList(res);
  }

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
        ) : null}

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
              ) : null}
            </GridItem>
          </Grid>
        ) : null}

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
                    <Box
                      h="90px"
                      bg="white"
                      borderRadius={6}
                      mt={2}
                      key={index}
                    >
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
                          <BootstrapSwitchButton
                            checked={x.active}
                            onChange={() => switchStatus(index)}
                            data-size="xs"
                          />
                          {/* <Box onClick={() => getIndex(x._id)}></Box> */}

                          <Tooltip label="Edit">
                            <EditIcon mr={4} onClick={() => editForm(x._id)} />
                          </Tooltip>
                          <DeleteIcon onClick={() => handleRemove(x._id)} />
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
