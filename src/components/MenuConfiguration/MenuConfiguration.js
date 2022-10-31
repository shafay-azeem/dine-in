import {
  Box,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Center,
  HStack,
  Switch,
  Button,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const MenuConfiguration = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <HStack m={5}>
          <Input size="md" borderRadius="8px" width="100%" placeholder="" />
        </HStack>
      )
    );
  };
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Dine-in QR Menu Configuration
          </Text>
        </GridItem>
      </Grid>

      <Box m="10">
        <Tabs w="100%">
          <TabList>
            <Tab>QR Settings</Tab>
            <Tab>Display Options</Tab>
            <Tab>Design</Tab>
            <Tab>Service Options</Tab>
            <Tab>Feedback Settings</Tab>
            <Tab>Ordering Settings</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>QR Settings</p>
            </TabPanel>
            <TabPanel>
              <p>Display Options</p>
            </TabPanel>
            <TabPanel>
              <p>Design</p>
            </TabPanel>
            <TabPanel>
              <Box bg="white" w="50%" p={4} borderRadius="10">
                <Box w="70%" m={4}>
                  <Text fontSize="17px" fontWeight="500">
                    Service Options
                  </Text>

                  <HStack>
                    <p>
                      You can add service request options below (e.g. Request
                      checkout, wrong order). If you don’t add any options, your
                      customers will send requests directly.
                    </p>
                    <Switch />
                  </HStack>

                  {inputList}

                  <Button colorScheme="blue" mt={4} onClick={onAddBtnClick}>
                    Add
                  </Button>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <p>Feedback Settings</p>
            </TabPanel>
            <TabPanel>
              <p>Ordering Settings</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default MenuConfiguration;
