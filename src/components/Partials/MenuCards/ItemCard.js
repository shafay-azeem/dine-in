import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  IconButton,
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
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";
import { MenuState } from "../../../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";
import ItemDrawer from "../../MenuManagement/ItemDrawer";
import {
  AiFillCopy,
  AiFillDelete,
  AiFillEdit,
  AiFillFileAdd,
} from "react-icons/ai";

const ItemCard = (props) => {
  console.log(props.menu_index, "pp", props.section_index, "qq");
  const { item, setItem, response, setResponse } = MenuState();

  const initialState = Number.isInteger(props?.section_index)
    ? response[props?.menu_index]?.section[props?.section_index]?.item
    : response[props?.menu_index]?.itemMenu;

  const [itemList, setItemList] = useState(initialState);
  const [count, setCount] = useState();

  const {
    isOpen: isOpenItem,
    onOpen: onOpenItem,
    onClose: onCloseItem,
  } = useDisclosure();

  const getIndex = (index) => {
    console.log(index, "index-------------");
    setCount(index);
  };

  const handleRemove = (index) => {
    if (Number.isInteger(props?.section_index) == true) {
      response[props.menu_index].section[props.section_index].item.splice(
        index,
        1
      );
      setResponse([...response]);
      setItemList(response[props.menu_index].section[props.section_index].item);
    } else {
      response[props.menu_index].itemMenu.splice(index, 1);
      setResponse([...response]);
      setItemList(response[props.menu_index].itemMenu);
    }
  };

  const duplicate = (x, y) => {
    console.log(y, "======y=========");

    function getTimestampInSeconds() {
      return Math.floor(Date.now() / 1000);
    }

    let itemData = {
      itemId: getTimestampInSeconds(),
      itemName: x.itemName,
      itemDescription: x.itemDescription,
    };

    if (y == null) {
      console.log(
        response[props.menu_index].itemMenu.push(itemData),
        "itemMenu array"
      );
      setResponse([...response]);
    } else {
      console.log(
        response[props.menu_index].section[props.section_index].item.push(
          itemData
        ),
        "section array"
      );
      setResponse([...response]);
    }
  };

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...itemList];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setItemList(updatedList);

    response[props.menu_index].section[props.section_index].item.length = 0;
    response[props?.menu_index]?.section[props?.section_index]?.item.push.apply(
      response[props?.menu_index]?.section[props?.section_index]?.item,
      updatedList
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {itemList?.map((x, index) => {
                return (
                  <Draggable
                    key={x.itemId}
                    draggableId={x.itemId.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Box bg="white" w="100%" p={4} borderRadius={6} mt={2}>
                          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                            <GridItem colSpan={2} h="10">
                              <HStack>
                                <Image
                                  boxSize="43px"
                                  objectFit="cover"
                                  borderRadius={3}
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                />
                                <Text pl={2}>
                                  {x.itemName}
                                  <Badge
                                    ml="3"
                                    mb="3"
                                    p={1}
                                    fontSize="9"
                                    borderRadius={6}
                                    colorScheme="red"
                                  >
                                    InActive
                                  </Badge>
                                </Text>
                              </HStack>
                            </GridItem>

                            <GridItem colStart={4} colEnd={6} h="10" ml="auto">
                              <HStack>
                                <Box>
                                  <InputGroup>
                                    <InputLeftElement
                                      pointerEvents="none"
                                      color="gray.500"
                                      children="$"
                                      size="sm"
                                      mt="-4px"
                                    />
                                    <Input
                                      placeholder="Price"
                                      size="sm"
                                      borderRadius={6}
                                      width="160px"
                                      mr={4}
                                    />
                                  </InputGroup>
                                </Box>
                                <Box py={2}>
                                  <Switch size="sm" isChecked />
                                </Box>
                                <Box>
                                  <Menu>
                                    <MenuButton
                                      as={IconButton}
                                      aria-label="Options"
                                      border="none"
                                      icon={<BsThreeDotsVertical />}
                                      variant="outline"
                                    />

                                    <MenuList>
                                      <Box onClick={() => getIndex(index)}>
                                        <MenuItem
                                          onClick={onOpenItem}
                                          icon={<AiFillEdit />}
                                        >
                                          Edit
                                        </MenuItem>
                                      </Box>

                                      {isOpenItem ? (
                                        <ItemDrawer
                                          menu_index={props.menu_index}
                                          section_index={props.section_index}
                                          item_index={count}
                                          isOpen={isOpenItem}
                                          onOpen={onOpenItem}
                                          onClose={onCloseItem}
                                        ></ItemDrawer>
                                      ) : (
                                        console.log(
                                          "Cant Open Item Drawer For Edit"
                                        )
                                      )}

                                      <MenuItem
                                        onClick={() =>
                                          duplicate(x, props?.section_index)
                                        }
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
                                </Box>
                              </HStack>
                            </GridItem>
                          </Grid>
                        </Box>
                      </Box>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>

      {/* <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              bg="white"
              borderRadius={6}
              mt={3}
              p={2}
            >
              {itemList?.map((x, index) => {
                return (
                  <Draggable
                    key={x.itemId}
                    draggableId={x.itemId.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={3}>
                          <GridItem colSpan={2}>
                            <HStack>
                              <Image
                                boxSize="50px"
                                objectFit="contain"
                                src="https://bit.ly/dan-abramov"
                                alt="Dan Abramov"
                              />
                              <Text pl={2}> {x.itemName}</Text>
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
                                  <Box onClick={() => getIndex(index)}>
                                    <MenuItem onClick={onOpenItem}>
                                      Edit
                                    </MenuItem>
                                  </Box>
                                  {isOpenItem ? (
                                    <ItemDrawer
                                      menu_index={props.menu_index}
                                      section_index={props.section_index}
                                      item_index={count}
                                      isOpen={isOpenItem}
                                      onOpen={onOpenItem}
                                      onClose={onCloseItem}
                                    ></ItemDrawer>
                                  ) : (
                                    console.log("sss")
                                  )}
                                  <MenuItem
                                    onClick={() =>
                                      duplicate(x, props?.section_index)
                                    }
                                  >
                                    Duplicate{" "}
                                  </MenuItem>
                                  <MenuItem onClick={() => handleRemove(index)}>
                                    Delete
                                  </MenuItem>
                                </MenuList>
                              </Menu>
                            </HStack>
                          </GridItem>
                        </Grid>
                      </Box>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext> */}
    </>
  );
};

export default ItemCard;
