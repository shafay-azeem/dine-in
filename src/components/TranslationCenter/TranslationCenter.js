import { CopyIcon } from "@chakra-ui/icons";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  Text,
  Box,
  VStack,
  Link,
  useDisclosure,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import LanguageModal from "./LanguageModal";

const TranslationCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Translation Center
          </Text>
        </GridItem>
      </Grid>

      <Box ml="10" mt={5}>
        <Tabs>
          <TabList>
            <Tab>Menus</Tab>
            <Tab>Modifiers</Tab>
            <Tab>Surveys</Tab>
            <Tab>Others</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <Box bg="white" w="100%" p={10}>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab>Info Page</Tab>
                    <Tab>Service Options</Tab>
                    <Tab>Menu Button</Tab>
                    <Tab>Venue Name</Tab>
                    <Tab>Welcome Message</Tab>
                    <Tab>Restaurant Notes</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Text fontSize="md">
                        Please select the languages you want to translate into.
                        <Link color="blue" onClick={onOpen}>
                          Click{" "}
                        </Link>
                        here to add a new language.
                        {isOpen ? (
                          <LanguageModal
                            isOpen={isOpen}
                            onOpen={onOpen}
                            onClose={onClose}
                          ></LanguageModal>
                        ) : (
                          console.log("sss")
                        )}
                      </Text>

                      <Center>
                        <Box
                          w="80%"
                          borderWidth="1px"
                          borderRadius="lg"
                          p={5}
                          mt={5}
                        >
                          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                            <GridItem colSpan={2} h="10">
                              <Text m={2}>Select Language</Text>
                            </GridItem>

                            <GridItem
                              colStart={4}
                              colEnd={6}
                              h="10"
                              textAlign="right"
                            >
                              <CopyIcon m={3} color="blue" />
                            </GridItem>
                          </Grid>
                          <Divider orientation="horizontal" />
                          <FormControl p={3}>
                            <FormLabel fontWeight="400">Header</FormLabel>
                            <Input type="text" />
                          </FormControl>
                          <FormControl p={3}>
                            <FormLabel fontWeight="400">Text</FormLabel>
                            <Textarea />
                          </FormControl>
                          <Center>
                            <Button colorScheme="teal" size="md" w="18%">
                              Save
                            </Button>
                          </Center>
                        </Box>
                      </Center>
                    </TabPanel>

                    <TabPanel>
                      <p>Service Options</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Menu Button</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Venue Name</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Welcome Message</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Restaurant Notes</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default TranslationCenter;
