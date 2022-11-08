import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../../CustomElements/CustomButton";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const DisplayCard = () => {

  const [data, setData] = useState([
    {
      id: 0,
      menuId: 101,
      name: "MENU 1",
      status: "LIVE",
      item: 1,
      date: "09-2-22",
      active: false,
    },
    {
      id: 0,
      menuId: 101,
      name: "MENU 2",
      status: "OFFLINE",
      item: 0,
      date: "11-2-22",
      active: false,
    },
    {
      id: 0,
      menuId: 101,
      name: "MENU 3",
      status: "IDLE",
      item: 1,
      date: "06-2-22",
      active: false,
    },
  ]);


  const createmenu = () => {
    history.push("/createmenu");
  };
  return (
    <>
      {data.map((x, index) => (
        <Box bg="white" w="100%" p={4} borderRadius={5} mb={4}>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <Text fontSize="17" fontWeight="500">
                {x.name}
                <Badge
                  ml="2"
                  colorScheme="green"
                  borderRadius={5}
                  fontWeight="500"
                  fontSize="11"
                >
                  {x.status}
                </Badge>
              </Text>
              <Text fontSize="13" fontWeight="400" p={2}>
                {x.item} item, last updated on {x.date}
              </Text>
            </GridItem>
            <GridItem colStart={4} colEnd={6}>
              <HStack mt={2} gap={4} ml="38%">
                <Switch />
                <CustomButton
                  click={createmenu}
                  size={"sm"}
                  btnText={"Edit Menu"}
                  leftIcon={<AiTwotoneEdit />}
                />
                <AiFillSetting />
                <Menu>
                  <MenuButton>
                    <BsThreeDotsVertical as={Button} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Duplicate</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default DisplayCard;
