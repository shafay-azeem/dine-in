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

import { useHistory } from "react-router-dom";
import WelcomeText from "./WelcomeText";
const CurrReportsCard = () => {
  const history = useHistory();

  const reports = () => {
    history.push("/reports");
  };

  return (
    <>
      <WelcomeText />
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
              <Text>Today</Text>
            </GridItem>
            <GridItem colStart={4} colEnd={6} h="10" textAlign="end" p={5}>
              <Text color="blue" onClick={reports} cursor="pointer">View Reports</Text>
            </GridItem>
          </Grid>
          <Divider orientation="horizontal" mt={2} />

          <Grid templateColumns="repeat(5, 1fr)" gap={4} p={1}>
            <GridItem colSpan={2} p={5}>
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td color="#C4C4C4">Revenue</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="500">$0.00</Td>
                      <Td color="#C4C4C4">0.00%</Td>
                    </Tr>
                  </Tbody>
                  <Tbody>
                    <Tr>
                      <Td color="#C4C4C4">Orders</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="500">0</Td>
                      <Td color="#C4C4C4">0.00%</Td>
                    </Tr>
                  </Tbody>
                  <Tbody>
                    <Tr>
                      <Td color="#C4C4C4">Visitors</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="500">0</Td>
                      <Td color="#C4C4C4">0.00%</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </GridItem>
            <GridItem colStart={4} colEnd={6} textAlign="end" p={5}>
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td color="#C4C4C4">Average Order Size</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="500">$0.00</Td>
                      <Td color="#C4C4C4">0.00%</Td>
                    </Tr>
                  </Tbody>
                  <Tbody>
                    <Tr>
                      <Td color="#C4C4C4">Sessions</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="500">0</Td>
                      <Td color="#C4C4C4">0.00%</Td>
                    </Tr>
                  </Tbody>
                  <Tbody>
                    <Tr>
                      <Td color="#C4C4C4">Tip</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="500">$0</Td>
                      <Td color="#C4C4C4">0.00%</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </>
  );
};

export default CurrReportsCard;
