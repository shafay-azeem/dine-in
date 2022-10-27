import React from "react";
import { Box, Button, Divider, Grid, GridItem, Text, useDisclosure } from "@chakra-ui/react";
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
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import MenuModifieModal from "./MenuModifieModal";
import PromoModal from "./PromoModal";
import PurchaseModal from "./PurchaseModal";

const InitialMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: promoIsOpen, onOpen: promoOnOpen, onClose: promoOnClose } = useDisclosure()
  const { isOpen: purchaseIsOpen, onOpen: purchaseOnOpen, onClose: purchaseOnClose } = useDisclosure()
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Menu Management
          </Text>
        </GridItem>
      </Grid>
      <Box ml="10" mt={5}>
        <Tabs>
          <TabList>
            <Tab>Menu</Tab>
            <Tab>Modifiers</Tab>
            <Tab>Promo Codes</Tab>
            <Tab>In-app purchases</Tab>
          </TabList>

          <TabPanels>
            <TabPanel></TabPanel>
            <TabPanel backgroundColor="white" textAlign="right">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                mb={2}
                onClick={onOpen}
              >
                Add a Modifiers Group

                {isOpen ? (
                  <MenuModifieModal
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}

                  />
                ) : (console.log("ss"))}
              </Button>
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>Group Name</Th>
                      <Th>Modifiers</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Text textAlign="center">No Data</Text>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel backgroundColor="white" textAlign="right">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                mb={2}
                onClick={promoOnOpen}
              >
                Add a Promo Code
                {promoIsOpen ? (
                  <PromoModal
                    isOpen={promoIsOpen}
                    onOpen={promoOnOpen}
                    onClose={promoOnClose}

                  />
                ) : (console.log("ss"))}
              </Button>
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>Discount Code</Th>
                      <Th>Description</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Text textAlign="center">No Data</Text>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel backgroundColor="white" textAlign="right">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                mb={2}
                onClick={purchaseOnOpen}
              >
                In App purchases

                {purchaseIsOpen ? (
                  <PurchaseModal
                    isOpen={purchaseIsOpen}
                    onOpen={purchaseOnOpen}
                    onClose={purchaseOnClose}

                  />
                ) : (console.log("ss"))}
              </Button>
              <TableContainer>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>Promotion Name</Th>
                      <Th>Description</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Text textAlign="center">No Data</Text>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default InitialMenu;
