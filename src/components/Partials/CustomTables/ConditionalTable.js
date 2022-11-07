import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const ConditionalTable = (props) => {

  const data = [
    {
      ID: 1,
      DiscountCode: "ABCXYZ",
      Description: "I am Description",
      Status: "Approved",
      Actions: "Promo"
    },
    {
      ID: 2,
      DiscountCode: "KIYNGS",
      Description: "I am Description",
      Status: "Approved",
      Actions: "Promo"
    },
    {
      ID: 3,
      DiscountCode: "XYZBDC",
      Description: "I am Description",
      Status: "Approved",
      Actions: "Promo"
    },
  ]
  const data2 = [
    {
      ID: 1,
      PromotionName: "Promo 1",
      Description: "I am Description",
      Status: "Approved",
      Actions: "Promo"
    },
    {
      ID: 3,
      PromotionName: "Promo 2",
      Description: "I am Description",
      Status: "Approved",
      Actions: "Promo"
    },
    {
      ID: 3,
      PromotionName: "Promo 3",
      Description: "I am Description",
      Status: "Approved",
      Actions: "Promo"
    },
  ]




  return (
    <>
      {props.number == 1 ? (<TableContainer>
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
            {data.map((x, index) => (<Tr key={index}>
              <Td>{x.DiscountCode}</Td>
              <Td>{x.Description}</Td>
              <Td>{x.Status}</Td>
              <Td>{x.Actions}</Td>

            </Tr>))}
          </Tbody>
        </Table>
      </TableContainer>) : (<TableContainer>
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
            {data2.map((x, index) => (<Tr key={index}>
              <Td>{x.PromotionName}</Td>
              <Td>{x.Description}</Td>
              <Td>{x.Status}</Td>
              <Td>{x.Actions}</Td>

            </Tr>))}
          </Tbody>
        </Table>
      </TableContainer>)}

    </>
  );
};

export default ConditionalTable;
