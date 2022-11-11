import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
} from "@chakra-ui/react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import React from "react";
import { useState } from "react";
import { MenuState } from "../../../context/MenuContext";

const ItemCard = () => {
  const { item, setItem } = MenuState()

  function handleRemove(index) {
    setItem([item.slice(0, index), ...item.slice(index + 1, item.length)])
  }
  return (
    <>
      {item.map((x, index) => (
        <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={3}>
          <GridItem colSpan={2}>
            <HStack>
              <Image
                boxSize="60px"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Text pl={2}> {x.itemName} {x.itemDescription}</Text>
            </HStack>
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <HStack>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="$"
                />
                <Input placeholder="Enter amount" value={x.itemName} />
              </InputGroup>
              <Switch p={5} />
              <Menu>
                <MenuButton>
                  <BsThreeDotsVertical as={Button} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Duplicate</MenuItem>


                  <MenuItem onClick={() => handleRemove(index)}>
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </GridItem>
        </Grid>
      ))}
    </>
  );
};

export default ItemCard;
