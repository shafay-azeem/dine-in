import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const OrderTable = () => {
  const [checkedItems, setCheckedItems] = React.useState(false);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>
                <Checkbox
                  isChecked={checkedItems}
                  onChange={(e) => setCheckedItems(e.target.checked)}
                >
                  ID
                </Checkbox>
              </Th>
              <Th>Daily No</Th>
              <Th>Status</Th>
              <Th>Type</Th>
              <Th>Table</Th>
              <Th>Update Time </Th>
              <Th>Sent Time </Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderTable;
