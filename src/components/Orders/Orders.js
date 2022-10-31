import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
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
import {
  ArrowForwardIcon,
  EmailIcon,
  PhoneIcon,
  RepeatIcon,
  SearchIcon,
} from "@chakra-ui/icons";

const Orders = () => {
  const [checkedItems, setCheckedItems] = React.useState(false);

  function testfunc() {
    window.location.reload();
    // return false;
  }

  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Orders
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(5, 1fr)" gap={6} m={10}>
        <GridItem w="100%" h="10">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search" bg="white" />
          </InputGroup>
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
          <Select placeholder="Edit Display" bg="white">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem>
        <GridItem w="100%" h="10" textAlign="center">
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
                onClick={testfunc}
              >
                Reload
              </Button>
            </Box>
          </Stack>
        </GridItem>
      </Grid>

      <Box m="10" mt={5}>
        <Tabs w="100%">
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
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
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
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
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
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
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
