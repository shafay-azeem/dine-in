import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  GridItem,
  Stack,
  Text,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import CustomerModal from "./CustomerModal";

const Customer = () => {
  const [checkedItems, setCheckedItems] = React.useState(false);
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

      <Grid templateColumns="repeat(5, 1fr)" gap={3} p={1}>
        <GridItem colSpan={2} h="10" p={5}>
          <Text fontWeight={600}>0 results Listed</Text>
        </GridItem>

        <GridItem colStart={3} h="10" textAlign="end" p={5}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search" bg="white" />
          </InputGroup>
        </GridItem>
        <GridItem colStart={4} colEnd={6} h="10" textAlign="end" p={5}>
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
            ) : (console.log("ss"))}
          </Button>
        </GridItem>
      </Grid>
      <Center mt={9}>
        <Box
          bg="white"
          border="1px"
          borderColor="#FAFAFA"
          borderRadius="10"
          w="85%"
        >
          <Divider orientation="horizontal" mt={2} />

          <TableContainer>
            <Table variant="simple">
              <Thead backgroundColor="#FAFAFA">
                <Tr>
                  <Th>
                    <Checkbox
                      isChecked={checkedItems}
                      onChange={(e) => setCheckedItems(e.target.checked)}
                    >
                      Customers
                    </Checkbox>
                  </Th>
                  <Th>Tags</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Total Orders</Th>
                  <Th>Last Visit</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </>
  );
};
export default Customer;
