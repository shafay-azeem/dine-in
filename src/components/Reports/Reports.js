import React from "react";
import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import Calender from "../miscellaneous/Calender";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";

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

      <Grid templateColumns="repeat(2, 1fr)" gap={6} p={10} mt={4}>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Order Types
          </Text>
          <Divider orientation="horizontal" />
          <Text textAlign="center" mt="4">
            No order type data yet
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Revenue
          </Text>
          <Divider orientation="horizontal" />
          <Text textAlign="center" mt="4">
            No revenue data yet
          </Text>
        </GridItem>
      </Grid>

      <Grid p={10} mt="3%">
        <GridItem w="100%" bg="white" height="250%">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Visitor Density
          </Text>
          <Divider orientation="horizontal" />
          <Text textAlign="center" mt="4">
            No visitor data yet
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} p={10} mt="7%">
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Revenue Share by Sections
          </Text>
          <Divider orientation="horizontal" />
          <Box>
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            />
          </Box>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Revenue Share by Items
          </Text>
          <Divider orientation="horizontal" />
          <Text textAlign="center" mt="4">
            No revenue data yet
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} p={10} mt="3%">
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Best Sellers
          </Text>
          <Divider orientation="horizontal" />
          <Text textAlign="center" mt="4">
            No best sellers data yet
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Worst Sellers
          </Text>
          <Divider orientation="horizontal" />
          <Text textAlign="center" mt="4">
            No worst sellers data yet
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} p={10} mt="3%">
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Most Viewed Items
          </Text>
          <Divider orientation="horizontal" />
          <Text textAlign="center" mt="4">
            No most viewed items data yet
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" height="200%" borderRadius="10px">
          <Text ml="10" mt="4" mb="4" fontSize="20px">
            Least Viewed Items
          </Text>
          <Divider orientation="horizontal" />
          <Text textAlign="center" mt="4">
            No least viewed items data yet
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Reports;
