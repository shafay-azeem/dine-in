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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../../CustomElements/CustomButton";
import { useHistory } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import SettingDrawer from "../../MenuManagement/SettingDrawer";
import { MenuState } from "../../../context/MenuContext";


const DisplayCard = () => {
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { menu } = MenuState()


  const createmenu = () => {
    history.push("/createmenu");
  };
  return (
    <>
      {menu.map((x, index) => (
        <Box bg="white" w="100%" p={4} borderRadius={5} mb={4}>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <Text fontSize="17" fontWeight="500">
                {x.menuName}
                <Badge
                  ml="2"
                  colorScheme="green"
                  borderRadius={5}
                  fontWeight="500"
                  fontSize="11"
                >
                  {/* {x.status} */}
                </Badge>
              </Text>
              <Text fontSize="13" fontWeight="400" p={2}>
                {/* {x.item} item, last updated on {x.date} */}
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
                <AiFillSetting onClick={onOpen} />
                {isOpen ? (
                  <SettingDrawer
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                  ></SettingDrawer>
                ) : (
                  console.log("sss")
                )}
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
