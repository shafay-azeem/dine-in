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
} from "@chakra-ui/react";
import React from "react";
import LanguageModal from "./LanguageModal";

const TranslationCenter = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
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
              <Box bg="white" w="100%" p={4}>
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
                        <Link color="blue" onClick={onOpen}>Click </Link>here to add a new
                        language.
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
