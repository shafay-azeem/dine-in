import React from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  TabPanels,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { ArrowForwardIcon, RepeatIcon, SearchIcon } from "@chakra-ui/icons";

const Feedbacks = () => {
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Feedbacks
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} m={10}>
        <GridItem w="100%" h="10" colSpan={1}>
          <Text fontWeight={600}>0 results Listed</Text>
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
              >
                Reload
              </Button>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
      <Box ml="10" mt={5}>
        <Tabs>
          <TabList>
            <Tab>Results</Tab>
            <Tab>Forms</Tab>
          </TabList>
        </Tabs>
      </Box>
    </>
  );
};

export default Feedbacks;
