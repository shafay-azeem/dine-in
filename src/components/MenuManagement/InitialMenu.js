import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import MenuModifieModal from "./MenuModifieModal";
import PromoModal from "./PromoModal";
import PurchaseModal from "./PurchaseModal";
import { useHistory } from "react-router-dom";

const InitialMenu = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: promoIsOpen,
    onOpen: promoOnOpen,
    onClose: promoOnClose,
  } = useDisclosure();
  const {
    isOpen: purchaseIsOpen,
    onOpen: purchaseOnOpen,
    onClose: purchaseOnClose,
  } = useDisclosure();

  const createmenu = () => {
    history.push("/createmenu");
  };

  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Menu Management
          </Text>
        </GridItem>
      </Grid>

      <Box m="10">
        <Tabs w="100%">
          <TabList>
            <Tab>Menu</Tab>
            <Tab>Modifiers</Tab>
            <Tab>Promo Codes</Tab>
            <Tab>In-app purchases</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={4} align="right">
                <GridItem colSpan={12} h="10">
                  <Button colorScheme="teal" size="sm" onClick={createmenu}>
                    Create Menu
                  </Button>
                </GridItem>
              </Grid>
              {/* <Grid templateColumns="repeat(5, 1fr)" gap={4} mb={3}>
                <GridItem colSpan={2} w="65%">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsSearch color="gray.300" />}
                    />
                    <Input type="tel" placeholder="Search tables" bg="white" />
                  </InputGroup>
                </GridItem>
                <GridItem colStart={4} colEnd={6} textAlign="right">
                  <Button
                    leftIcon={<BsPlusLg />}
                    colorScheme="teal"
                    variant="solid"
                    size="md"
                    onClick={onOpen}
                  >
                    Add New Tables
                    {isOpen ? (
                      <AddTableDrawer
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                      ></AddTableDrawer>
                    ) : (
                      console.log("sss")
                    )}
                  </Button>
                </GridItem>
              </Grid> */}
            </TabPanel>
            <TabPanel backgroundColor="white" textAlign="right">
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                mb={2}
                onClick={onOpen}
                size="sm"
              >
                Add a Modifiers Group
                {isOpen ? (
                  <MenuModifieModal
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                  />
                ) : (
                  console.log("ss")
                )}
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
                size="sm"
              >
                Add a Promo Code
                {promoIsOpen ? (
                  <PromoModal
                    isOpen={promoIsOpen}
                    onOpen={promoOnOpen}
                    onClose={promoOnClose}
                  />
                ) : (
                  console.log("ss")
                )}
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
                size="sm"
              >
                Add a Promotion
                {purchaseIsOpen ? (
                  <PurchaseModal
                    isOpen={purchaseIsOpen}
                    onOpen={purchaseOnOpen}
                    onClose={purchaseOnClose}
                  />
                ) : (
                  console.log("ss")
                )}
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
