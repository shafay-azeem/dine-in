import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const Reports = () => {
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25">
            Reports
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={10}>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" color="#C4C4C4">
            Revenue
          </Text>
          <Text ml="10" mt="4" fontSize="20px">
            USD0.00
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" color="#C4C4C4">
            Orders
          </Text>
          <Text ml="10" mt="4" fontSize="20px">
            USD0.00
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" color="#C4C4C4">
            Customers
          </Text>
          <Text ml="10" mt="4" fontSize="20px">
            USD0.00
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" color="#C4C4C4">
            Tip
          </Text>
          <Text ml="10" mt="4" fontSize="20px">
            USD0.00
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={10} mt={4}>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" color="#C4C4C4">
            Items Served
          </Text>
          <Text ml="10" mt="4" fontSize="20px">
            USD0.00
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" color="#C4C4C4">
            Average Order Size
          </Text>
          <Text ml="10" mt="4" fontSize="20px">
            USD0.00
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" color="#C4C4C4">
            Sessions
          </Text>
          <Text ml="10" mt="4" fontSize="20px">
            USD0.00
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" color="#C4C4C4">
            Best Day
          </Text>
          <Text ml="10" mt="4" fontSize="20px">
            USD0.00
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Reports;
