import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
  ArrowForwardIcon,
  CopyIcon,
  DeleteIcon,
  DragHandleIcon,
  EditIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "../../App.css";
import FeedbackDeleteModal from "./FeedbackDeleteModal";

const Feedbacks = () => {
  const handle = useFullScreenHandle();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showLogin, setShowLogin] = useState(false);

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
                <Button
                  colorScheme="teal"
                  variant="outline"
                  onClick={handle.enter}
                >
                  FullScreen
                </Button>
              </Box>
            </Stack>
          </GridItem>
        </Grid>
        <Box ml="10" mt={5}>
          <Tabs>
            <TabList>
              <Tab>Results</Tab>
              <Tab>Forms</Tab>
            </TabList>

            <TabPanels>
              <TabPanel backgroundColor="white" textAlign="right">
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
                      <Menu>
                        <MenuButton
                          bg="none"
                          as={Button}
                          leftIcon={<DragHandleIcon />}
                        ></MenuButton>
                        <MenuList>
                          <MenuItem icon={<CopyIcon />}>Dublicate</MenuItem>

                          <>
                            <MenuItem
                              icon={<DeleteIcon />}
                              onClick={() => setShowLogin(true)}
                            >
                              Delete
                            </MenuItem>
                            <FeedbackDeleteModal
                              show={showLogin}
                              isOpen={isOpen}
                              onOpen={onOpen}
                              onClose={onClose}
                              close={() => setShowLogin(false)}
                            />
                          </>
                        </MenuList>
                      </Menu>
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
