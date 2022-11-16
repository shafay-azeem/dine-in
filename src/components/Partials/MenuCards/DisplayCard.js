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
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import SettingDrawer from "../../MenuManagement/SettingDrawer";
import { MenuState } from "../../../context/MenuContext";
import { useNavigate, createSearchParams } from "react-router-dom";

const DisplayCard = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menu } = MenuState();
  const [open, setOpen] = useState(false);
  const [indivisualId, setIndivisualId] = useState();
  const { response } = MenuState();

  const myfun = (id) => {
    navigate({
      pathname: "/createmenu",
      search: createSearchParams({ id }).toString(),
    });
  };

  function myfun2(id) {
    setIndivisualId(id);
    console.log(id);
  }

  return (
    <>
      {response.map((x, index) => (

        <Box bg="white" w="100%" p={4} borderRadius={5} mb={4}
          key={index}>
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
                {/* <CustomButton
                  // click={createmenu(index)}
                  size={"sm"}
                  btnText={"Edit Menu"}
                  leftIcon={<AiTwotoneEdit />}
                /> */}
                <Button onClick={() => myfun(index)}>EDIT MENU</Button>
                <Box onClick={() => myfun2(index)}>
                  <AiFillSetting onClick={onOpen} />
                </Box>
                {isOpen ? (
                  <SettingDrawer
                    index={indivisualId}
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
      ))
      }
    </>
  );
};

export default DisplayCard;
