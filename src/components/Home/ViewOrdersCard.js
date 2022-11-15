import React from "react";
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
  Grid,
  GridItem,
  Box,
  Center,
  Square,
  Circle,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import OrderTable from "../Partials/CustomTables/OrderTable";


const ViewOrdersCard = () => {
  const navigate = useNavigate();

  const orders = () => {


    navigate({
      pathname: "/order",
      // search: createSearchParams({ id }).toString(),
    });
  };
  return (
    <>
      <Center mt={5}>
        <Box
          bg="white"
          border="1px"
          borderColor="#FAFAFA"
          borderRadius="10"
          w="75%"
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={4} p={1}>
            <GridItem colSpan={2} h="10" p={5}>
              <Text>Recent Orders</Text>
            </GridItem>
            <GridItem colStart={4} colEnd={6} h="10" textAlign="end" p={5}>
              <Text color="blue" onClick={orders} cursor="pointer">
                View Orders
              </Text>
            </GridItem>
          </Grid>
          <Divider orientation="horizontal" mt={2} />
          <OrderTable />
        </Box>
      </Center>
    </>
  );
};

export default ViewOrdersCard;
