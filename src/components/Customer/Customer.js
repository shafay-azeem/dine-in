import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  GridItem,
  Text,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  TableContainer,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CustomerModal from "./CustomerModal";
import { BsSearch } from "react-icons/bs";

const Customer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Customers
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(5, 1fr)" gap={4} m="10">
        <GridItem colSpan={2} h="10">
          <Text fontWeight={600}>0 results Listed</Text>
        </GridItem>
        <GridItem colStart={5} h="10" bg="papayawhip">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="gray.300" />}
            />
            <Input type="tel" placeholder="Search tables" bg="white" />
          </InputGroup>
        </GridItem>

        <GridItem colStart={6} h="10" bg="papayawhip">
          <Button
            leftIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="solid"
            onClick={onOpen}
          >
            Export
            {isOpen ? (
              <CustomerModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
            ) : (
              console.log("ss")
            )}
          </Button>
        </GridItem>
      </Grid>

      <Box m="10">
        <TableContainer borderRadius={4}>
          <Table variant="simple">
            <Thead backgroundColor="#FAFAFA">
              <Tr>
                <Th>
                  <Checkbox defaultChecked mr={5} />
                  Customer
                </Th>
                <Th>Tags</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Total Orders</Th>
                <Th>Last Visit</Th>
              </Tr>
            </Thead>
            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
export default Customer;
