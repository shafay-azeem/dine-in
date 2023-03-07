import React from "react";
import { Box, Grid, GridItem, Tab, TabList, Text } from "@chakra-ui/react";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react";

import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import excelData from "./Export.json";
import OrderTable from "../Partials/CustomTables/OrderTable";
import { useState } from "react";

const Orders = (props) => {
  let paymentStatus = props.paymentStatus;
  const [checkedItems, setCheckedItems] = React.useState(false);

  const [type, setType] = useState();

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

  const handleAllTabClick = (x) => {
    setType(x);
  };

  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Orders
          </Text>
        </GridItem>
      </Grid>

      <Box m="10" mt={5}>
        <Tabs w="100%">
          <TabList>
            <Tab onClick={() => handleAllTabClick(null)}>All</Tab>
            <Tab onClick={() => handleAllTabClick("dinein")}>Dine In</Tab>
            <Tab onClick={() => handleAllTabClick("delivery")}>Delivery</Tab>
            <Tab onClick={() => handleAllTabClick("pickup")}>Pick Up</Tab>
          </TabList>

          <TabPanels>
            <TabPanel backgroundColor="white">
              <OrderTable paymentStatus={paymentStatus} />
            </TabPanel>
            <TabPanel backgroundColor="white">
              <OrderTable type={type} paymentStatus={paymentStatus} />
            </TabPanel>
            <TabPanel backgroundColor="white">
              <OrderTable type={type} paymentStatus={paymentStatus} />
            </TabPanel>
            <TabPanel backgroundColor="white">
              <OrderTable type={type} paymentStatus={paymentStatus} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Orders;
