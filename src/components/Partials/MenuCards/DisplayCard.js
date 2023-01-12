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
import { AiFillCopy, AiFillDelete, AiFillSetting } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import SettingDrawer from "../../MenuManagement/SettingDrawer";
import { MenuState } from "../../../context/MenuContext";
import { useNavigate, createSearchParams } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import apiFunctions from "../../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../../global/Constant";
import { useEffect } from "react";

const DisplayCard = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menu } = MenuState();
  const [open, setOpen] = useState(false);
  const [indivisualId, setIndivisualId] = useState();
  const { response, setResponse } = MenuState();
  const [menulist, setMenulist] = useState();

  useEffect(() => {
    getAllMenu();
  }, [response]);

  async function getAllMenu() {
    let getMenu = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_MENU
    );

    let res = getMenu.data.menu;
    setResponse(res);
  }

  const myfun = (id) => {
    navigate({
      pathname: "/createmenu",
      search: createSearchParams({ id }).toString(),
    });
  };

  function myfun2(id) {
    setIndivisualId(id);
  }

  function switchStatus(index) {
    response[index].menuStatus = !response[index].menuStatus;
    setResponse([...response]);
  }

  const handleRemove = async (id) => {

    await apiFunctions.DELETE_REQUEST(BASE_URL + API_URL.DELETE_MENU_BY_ID + id).then(res => {
      if (res.data.success == true) {
        alert(`${res.data.message}`)
        return true
      }
      else {
        alert(`There Some Error`)
        return false
      }
    });

    // response.splice(index, 1);
    // setResponse([...response]);
    // setMenulist(response);
  };

  const duplicate = async (x) => {
    let menuData = {
      menuName: x.menuName,
      menuDescription: x.menuDescription,
      menuNote: x.menuNote,
    };

    await apiFunctions.POST_REQUEST(BASE_URL + API_URL.CREATE_MENU, menuData).then(res => {
      if (res.data.success == true) {
        alert(`MENU DUPLICATED SUCCESSFULLY`).then(res => {
          setResponse(res);
          return true
        }

        )
      }
      else {
        alert(`There Some Error`)
        return false
      }
    });

  };

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...menulist];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setMenulist(updatedList);

    response.length = 0;
    response.push.apply(response, updatedList);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {response?.map((x, index) => {
                return (
                  <Draggable key={x._id} draggableId={x._id} index={index}>
                    {(provided) => (
                      <Box
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        key={index}
                      >
                        <Box
                          bg="white"
                          w="100%"
                          p={4}
                          borderRadius={5}
                          mb={4}
                          key={index}
                        >
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
                              <Text>{x.menuDescription}</Text>
                              <Text>Last Updated on {x.createAt}</Text>
                              <Text fontSize="13" fontWeight="400" p={2}>
                                {/* {x.item} item, last updated on {x.date} */}
                              </Text>
                            </GridItem>
                            <GridItem colStart={4} colEnd={6}>
                              <HStack mt={2} gap={4} ml="38%">
                                <BootstrapSwitchButton
                                  checked={x.menuStatus}
                                  onChange={() => switchStatus(index)}
                                  data-size="xs"
                                />

                                <Button onClick={() => myfun(index)}>
                                  EDIT MENU
                                </Button>
                                <Box onClick={() => myfun2(x._id)}>
                                  <AiFillSetting onClick={onOpen} />
                                </Box>
                                {isOpen ? (
                                  <SettingDrawer
                                    index={indivisualId}
                                    isOpen={isOpen}
                                    onOpen={onOpen}
                                    onClose={onClose}
                                    menuCreate={false}
                                  ></SettingDrawer>
                                ) : null}
                                <Menu>
                                  <MenuButton>
                                    <BsThreeDotsVertical as={Button} />
                                  </MenuButton>
                                  <MenuList>
                                    <MenuItem
                                      onClick={() => duplicate(x, index)}
                                      icon={<AiFillCopy />}
                                    >
                                      Duplicate
                                    </MenuItem>
                                    <MenuItem
                                      onClick={() => handleRemove(x._id)}
                                      icon={<AiFillDelete />}
                                    >
                                      Delete
                                    </MenuItem>
                                  </MenuList>
                                </Menu>
                              </HStack>
                            </GridItem>
                          </Grid>
                        </Box>
                      </Box>
                    )}
                  </Draggable>
                );
              })}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DisplayCard;
