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


  const { data } = MenuState()
  // const [data, setData] = useState([
  //   {
  //     id: 0,
  //     menuId: 101,
  //     name: "Alfredo Paste",
  //     active: false,
  //   },
  //   {
  //     id: 1,
  //     menuId: 102,
  //     name: "Sushi",
  //     active: false,
  //   },
  //   {
  //     id: 2,
  //     menuId: 103,
  //     name: "Zinger ",
  //     active: false,
  //   },
  // ]);

  // function handleRemove(index) {
  //   console.log(index);

  //   setData([...data.slice(0, index), ...data.slice(index + 1, data.length)]);
  // }

  return (
    <>
      {data.map((x, index) => (
        <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={3}>
          <GridItem colSpan={2}>
            <HStack>
              <Image
                boxSize="60px"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Text pl={2}> {x.section[0].item[0].itemName}</Text>
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
                <Input placeholder="Enter amount" />
              </InputGroup>
              <Switch p={5} />
              <Menu>
                <MenuButton>
                  <BsThreeDotsVertical as={Button} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Duplicate</MenuItem>
                  <MenuItem >
                    Delete
                  </MenuItem>

                  {/* <MenuItem onClick={() => handleRemove(index)}>
                    Delete
                  </MenuItem> */}
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
