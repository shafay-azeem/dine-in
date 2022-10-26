import React from "react";
import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
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

const Orders = () => {
  const [checkedItems, setCheckedItems] = React.useState(false);

  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Orders
          </Text>
        </GridItem>
      </Grid>

      <Box ml="10" mt={5}>
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>New</Tab>
            <Tab>Preparing</Tab>
            <Tab>Ready</Tab>
          </TabList>

          <TabPanels>
            <TabPanel backgroundColor="white">
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>
                        <Checkbox
                          isChecked={checkedItems}
                          onChange={(e) => setCheckedItems(e.target.checked)}
                        >
                          ID
                        </Checkbox>
                      </Th>
                      <Th>Daily No</Th>
                      <Th>Status</Th>
                      <Th>Type</Th>
                      <Th>Table</Th>
                      <Th>Update Time </Th>
                      <Th>Sent Time </Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Text textAlign="center">No Data</Text>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel backgroundColor="white">
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>ID</Th>
                      <Th>Daily No</Th>
                      <Th>Status</Th>
                      <Th>Type</Th>
                      <Th>Table</Th>
                      <Th>Update Time </Th>
                      <Th>Sent Time </Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel backgroundColor="white">
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>ID</Th>
                      <Th>Daily No</Th>
                      <Th>Status</Th>
                      <Th>Type</Th>
                      <Th>Table</Th>
                      <Th>Update Time </Th>
                      <Th>Sent Time </Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel backgroundColor="white">
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>ID</Th>
                      <Th>Daily No</Th>
                      <Th>Status</Th>
                      <Th>Type</Th>
                      <Th>Table</Th>
                      <Th>Update Time </Th>
                      <Th>Sent Time </Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Orders;
