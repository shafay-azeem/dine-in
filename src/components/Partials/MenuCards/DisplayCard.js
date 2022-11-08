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

const DisplayCard = () => {
  return (
    <>
      <Box bg="white" w="100%" p={4} borderRadius={5}>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <Text fontSize="20" fontWeight="500">
              Menu
              <Badge
                ml="2"
                colorScheme="green"
                borderRadius={5}
                fontWeight="500"
                fontSize="11"
              >
                Live
              </Badge>
            </Text>
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <HStack mt={2} gap={4} ml="38%">
              <Switch />
              <CustomButton
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
    </>
  );
};

export default DisplayCard;
