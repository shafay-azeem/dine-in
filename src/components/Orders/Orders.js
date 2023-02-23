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
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import excelData from "./Export.json";
import OrderTable from "../Partials/CustomTables/OrderTable";
import CustomButton from "../../CustomElements/CustomButton";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";

const Orders = (props) => {
  console.log(props.paymentStatus, "payment status");
  let paymentStatus = props.paymentStatus;

  const [checkedItems, setCheckedItems] = React.useState(false);

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileName = "Excel Export";
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

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
        {/* <GridItem w="100%" h="10">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search" bg="white" />
          </InputGroup>
        </GridItem> */}

        {/* <GridItem>
          <RadioGroup>
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="green"
                value="1"
                onChange={(e) => setValue(e.target.value)}
              >
                Order On Daily Basis
              </Radio>
              <Radio
                colorScheme="green"
                value="2"
                onChange={(e) => setValue(e.target.value)}
              >
                Specific Range Of Orders
              </Radio>
            </Stack>
          </RadioGroup>
        </GridItem> */}

        {/* {value == "2" ? (
          <Box>
            <GridItem w="100%" h="10">
              <Text mb="8px">Start Date</Text>
              <Input
                placeholder="Start Date"
                size="md"
                type="date"
                bg="white"
              />
            </GridItem>
            <GridItem w="100%" h="10">
              <Text mb="8px">End Date</Text>
              <Input placeholder="End Date" size="md" type="date" bg="white" />
            </GridItem>
          </Box>
        ) : null}

        {value == "1" ? (
          <Box>
            <GridItem w="100%" h="10">
              <Text mb="8px">Start Date</Text>
              <Input
                placeholder="Start Date"
                size="md"
                type="date"
                bg="white"
              />
            </GridItem>
          </Box>
        ) : null} */}

        {/* <GridItem w="100%" h="10">
          <Select placeholder="Edit Display" bg="white">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem> */}
        {/* <GridItem w="100%" h="10" textAlign="center">
          <Stack direction={["column", "row"]} spacing="24px">
            <Box w="100px" h="40px">
              <CustomButton
                click={(e) => exportToExcel(fileName)}
                btnText={"Export"}
                leftIcon={<ArrowForwardIcon />}
              />
            </Box>
            <Box w="100px" h="40px">
              <CustomButton
                click={testfunc}
                btnText={"Reload"}
                variant={"outline"}
                leftIcon={<RepeatIcon />}
              />
            </Box>
          </Stack>
        </GridItem> */}
      </Grid>

      <Box m="10" mt={5}>
        <Tabs w="100%">
          {/* <TabList>
            <Tab>All</Tab>
            <Tab>New</Tab>
            <Tab>Preparing</Tab>
            <Tab>Ready</Tab>
          </TabList> */}

          <TabPanels>
            <TabPanel backgroundColor="white">
              <OrderTable paymentStatus={paymentStatus} />
            </TabPanel>
            {/* <TabPanel backgroundColor="white">
              <OrderTable />
            </TabPanel>
            <TabPanel backgroundColor="white">
              <OrderTable />
            </TabPanel>
            <TabPanel backgroundColor="white">
              <OrderTable />
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Orders;
