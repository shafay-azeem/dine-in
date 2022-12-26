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
import { Row } from "react-bootstrap";
import { MenuState } from "../../../context/MenuContext";

const ModifiersTable = () => {
  const { modifier, setModifier } = MenuState();

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>Group Name</Th>
              <Th>Modifiers</Th>
            </Tr>
          </Thead>
          <Tbody>
            {modifier?.map((x, index) => {
              return (
                <Tr key={index}>
                  <Td>{x.Groupname}</Td>

                  <Td>
                    {x.modifiers?.map((y, index) => {
                      return <span key={index}>{y.Name},</span>;
                    })}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ModifiersTable;
