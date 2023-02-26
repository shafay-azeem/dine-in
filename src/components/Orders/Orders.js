import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react";

import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import excelData from "./Export.json";
import OrderTable from "../Partials/CustomTables/OrderTable";

const Orders = (props) => {
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

      {/* <Grid templateColumns="repeat(5, 1fr)" gap={6} m={10}> */}
      {/* <GridItem w="100%" h="10">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search" bg="white" />
          </InputGroup>
        </GridItem> */}

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
      {/* </Grid> */}

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
