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

const DisplayCard = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menu } = MenuState();
  const [open, setOpen] = useState(false);
  const [indivisualId, setIndivisualId] = useState();
  const { response, setResponse } = MenuState();
  const [menulist, setMenulist] = useState(response);

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

  const handleRemove = (index) => {
    response.splice(index, 1);
    setResponse([...response]);
    setMenulist(response);
  };

  const duplicate = (x, index) => {
    function getTimestampInSeconds() {
      return Math.floor(Date.now() / 1000);
    }

    let menuData = {
      id: getTimestampInSeconds(),
      menuName: x.menuName,
      menuDescription: x.menuDescription,
      menuNote: x.menuNote,
      menuStatus: x.menuStatus,
      availaibility: x.availaibility,
      section: response[index].section,
      createdDate: new Date().toLocaleString(),
    };

    response.push(menuData);
    setResponse([...response]);
    setMenulist(response);
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
                  <Draggable
                    key={x.id}
                    draggableId={x.id.toString()}
                    index={index}
                  >
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
                              <Text>Last Updated on {x.createdDate}</Text>
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
                                      onClick={() => handleRemove(index)}
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
