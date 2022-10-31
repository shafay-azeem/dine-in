import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Stack,
  Switch,
  Table,
  TableContainer,
  TabPanel,
  TabPanels,
  Tbody,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import {
  AddIcon,
  ArrowForwardIcon,
  DeleteIcon,
  EditIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "../../App.css";
import FeedbackDeleteModal from "./FeedbackDeleteModal";
import CreateFormModal from "./CreateFormModal";

const Feedbacks = () => {
  const handle = useFullScreenHandle();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showform, setShowForm] = useState(false);
  const [showresult, setShowResult] = useState(true);

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

  console.log(isOpen, "isOpen");
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
                  <Button
                    leftIcon={<ArrowForwardIcon />}
                    colorScheme="teal"
                    variant="solid"
                  >
                    Export
                  </Button>
                </Box>
                <Box w="100px" h="40px">
                  <Button
                    leftIcon={<RepeatIcon />}
                    colorScheme="teal"
                    variant="outline"
                  >
                    Reload
                  </Button>
                  {/* <Button
                  colorScheme="teal"
                  variant="outline"
                  onClick={handle.enter}
                >
                  FullScreen
                </Button> */}
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
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                mb={2}
                onClick={formOnOpen}
              >
                Create Form
                {formIsOpen ? (
                  <CreateFormModal
                    isOpen={formIsOpen}
                    onOpen={formOnOpen}
                    onClose={formOnClose}
                  />
                ) : (
                  console.log("create form cant open")
                )}
              </Button>
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
                <TableContainer>
                  <Table variant="simple">
                    <Thead backgroundColor="#FAFAFA">
                      <Tr>
                        <Th>Results</Th>
                        <Th>Date</Th>
                        <Th>Form</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Text textAlign="center">No Data</Text>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>

              <TabPanel>
                <Box h="90px" bg="white" borderRadius={6}>
                  <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    <GridItem colSpan={2}>
                      <Text p={8}>Sample Form</Text>
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} h="10" align="end" p={8}>
                      <Switch id="email-alerts" mr={4} />
                      <Tooltip label="Edit">
                        <EditIcon mr={4} />
                      </Tooltip>

                      <Button onClick={onOpen} bg="white">
                        <DeleteIcon />

                        {isOpen ? (
                          <FeedbackDeleteModal
                            isOpen={isOpen}
                            onOpen={onOpen}
                            onClose={onClose}
                          />
                        ) : (
                          console.log("ss")
                        )}
                      </Button>
                    </GridItem>
                  </Grid>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </FullScreen>
    </>
  );
};

export default Feedbacks;
