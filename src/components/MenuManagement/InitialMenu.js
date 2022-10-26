import React from "react";
import { Box, Button, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const InitialMenu = () => {
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Menu Management
          </Text>
        </GridItem>
      </Grid>
      <Box ml="10" mt={5}>
        <Tabs>
          <TabList>
            <Tab>Menu</Tab>
            <Tab>Modifiers</Tab>
            <Tab>Promo Codes</Tab>
            <Tab>In-app purchases</Tab>
          </TabList>

          <TabPanels>
            <TabPanel></TabPanel>
            <TabPanel backgroundColor="white" textAlign="right">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                mb={2}
              >
                Add a Modifiers Group
              </Button>
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>Group Name</Th>
                      <Th>Modifiers</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Text textAlign="center">No Data</Text>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel backgroundColor="white" textAlign="right">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                mb={2}
              >
                Add a Promo Code
              </Button>
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>Discount Code</Th>
                      <Th>Description</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Text textAlign="center">No Data</Text>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel backgroundColor="white" textAlign="right">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                mb={2}
              >
                Add a Promo Code
              </Button>
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>Promotion Name</Th>
                      <Th>Description</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Text textAlign="center">No Data</Text>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default InitialMenu;
