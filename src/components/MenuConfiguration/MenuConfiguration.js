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
} from "@chakra-ui/react";
import React from "react";

const MenuConfiguration = () => {
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
              <p>Service Options</p>
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
