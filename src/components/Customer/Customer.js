import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CustomerModal from "./CustomerModal";
import { BsSearch } from "react-icons/bs";
import CustomButton from "../../CustomElements/CustomButton";
import CustomTable from "../../CustomElements/CustomTable";

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

        <GridItem colStart={6} h="10">
          <CustomButton
            click={onOpen}
            btnText={"Export"}
            leftIcon={<ArrowForwardIcon />}
          />

          {isOpen ? (
            <CustomerModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          ) : null}
        </GridItem>
      </Grid>

      <Box m="10">
        <CustomTable
          Customer={"Customer"}
          Tags={"Tags"}
          Email={"Email"}
          Phone={"Phone"}
          TotalOrders={"Total Orders"}
          LastVisit={"Last Visit"}
        />
      </Box>
    </>
  );
};
export default Customer;
