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

const ModifiersTable = () => {


  const data = [
    {
      ID: 1,
      GroupName: "Modifier 1",
      Modifier: "I am Modifier",
      Action: "Modifier",

    },
    {
      ID: 2,
      GroupName: "Modifier 2",
      Modifier: "I am Modifier",
      Action: "Modifier",

    },
    {
      ID: 3,
      GroupName: "Modifier 3",
      Modifier: "I am Modifier",
      Action: "Modifier",

    },
  ]
  return (
    <>
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
            {data.map((x, index) => (<Tr key={index}>
              <Td>{x.GroupName}</Td>
              <Td>{x.Modifier}</Td>
              <Td>{x.Action}</Td>
            </Tr>))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ModifiersTable;
