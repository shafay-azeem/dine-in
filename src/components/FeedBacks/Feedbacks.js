import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
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
import { useToast } from "@chakra-ui/react";
import Spinner from "react-bootstrap/Spinner";

const Feedbacks = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const handle = useFullScreenHandle();
  // createfeedback, setCreateFeedback,
  const {
    feedbackFormList,
    setFeedbackFormList,
    activeForm,
    setActiveForm,
    createForm,
    setCreateForm,
    feedback,
    setFeedback,
  } = MenuState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showform, setShowForm] = useState(false);
  const [showresult, setShowResult] = useState(true);
  const [getFeedback, setGetFeedback] = useState(false);
  const [deleteFeedback, setDeleteFeedback] = useState(false);
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState();

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileName = "Excel Export";

  for (let i = 0; i < feedback.length; i++) {
    // console.log(feedback[i]);
  }

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
    return false;
  }

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_FEEDBACK_FORM_BY_ID + id)
      .then((res) => {
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setDeleteFeedback(true);
          return true;
        } else {
          //alert(`There Some Error`);

          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
          return false;
        }
      });
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

  const switchStatus = async (id, index, x) => {
    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDTAE_FORM_STATUS + id)
      .then((res) => {
        if (res.status == 200) {
          setCount(true);
          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
          return false;
        }
      });
  };

  useEffect(() => {
    getAllFeedbackForm();
    setDeleteFeedback(false);
    setCreateForm(false);
    setCount(false);
  }, [createForm, deleteFeedback, count]);

  async function getAllFeedbackForm() {
    setLoading(false);
    let geFeedbackForms = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_FEEDBACK_FORM
    );

    if (geFeedbackForms.data.feedbackForm.length == 0) {
      setLoading(true);
    }

    let res = geFeedbackForms.data.feedbackForm;

    setFeedbackFormList(res);
    setLoading(true);
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
          <Grid templateColumns="repeat(5, 1fr)" gap={4} m={10}>
            <GridItem w="100%" colSpan={1}>
              <Text fontWeight={600}>{feedback?.length} results Listed</Text>
            </GridItem>

            <GridItem colStart={9} colEnd={9} textAlign="right">
              <HStack>
                <CustomButton
                  click={reload}
                  btnText={"Reload"}
                  variant={"outline"}
                  leftIcon={<RepeatIcon />}
                />
              </HStack>
            </GridItem>
          </Grid>
        ) : null}

        {showform ? (
          <Grid templateColumns="repeat(5, 1fr)" gap={4} m={10}>
            <GridItem colSpan={2} h="10">
              <Text fontWeight={600}>
                {feedbackFormList?.length} forms listed
              </Text>
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
                            onChange={() => switchStatus(x._id, index, x)}
                            size="sm"
                            onlabel="on"
                            offlabel="off"
                          />

                          <Tooltip label="Edit">
                            <EditIcon
                              mr={4}
                              onClick={() => editForm(x._id)}
                              style={{ marginLeft: "15px", cursor: "pointer" }}
                            />
                          </Tooltip>

                          <Tooltip label="Delete">
                            <DeleteIcon
                              onClick={() => handleRemove(x._id)}
                              style={{ cursor: "pointer" }}
                            />
                          </Tooltip>
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
