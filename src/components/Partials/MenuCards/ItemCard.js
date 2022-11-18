import {
  Box,
  Button,
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
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";
import { MenuState } from "../../../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";
import ItemDrawer from "../../MenuManagement/ItemDrawer";

const ItemCard = (props) => {
  console.log(props.menu_index, "pp", props.section_index, "qq")
  const { item, setItem, response, setResponse } = MenuState();
  const [itemList, setItemList] = useState(response[props?.menu_index]?.section[props?.section_index]?.item);
  const [count, setCount] = useState();


  const {
    isOpen: isOpenItem,
    onOpen: onOpenItem,
    onClose: onCloseItem,
  } = useDisclosure();


  const getIndex = (index) => {

    console.log(index, 'index-------------')
    setCount(index);
  };


  const handleRemove = (index) => {
    // console.log(index, 'handle remove')
    response[props.menu_index].section[props.section_index].item.splice(index, 1)
    setResponse([...response]);
    setItemList(response[props.menu_index].section[props.section_index].item);
    // itemList.splice(index, 1);
    // var updatedList = [...itemList];
    // setItemList(updatedList);
    // setItem(updatedList);
  };

  // const duplicate = (x) => {
  //   item.push(x);
  //   var updatedList = [...item];
  //   setItemList(updatedList);
  //   setItem(updatedList);
  // };

  const duplicate = (x) => {

    function getTimestampInSeconds() {
      return Math.floor(Date.now() / 1000);
    }


    let itemData = {
      itemId: getTimestampInSeconds(),
      itemName: x.itemName,
      itemDescription: x.itemDescription,
    };

    console.log(response[props.menu_index].section[props.section_index].item.push(itemData), "section array")
    setResponse([...response]);
    // console.log(response[props?.menu_index]?.section, "kkk")
    // sectionList.push(x)
    // response[props.menu_index].section?.push(x)
    // var updatedList = [...response[props?.menu_index]?.section];
    // setSectionList(updatedList);


    // console.log(response[menu_index].section, 'sectionlist')
    // setResponse(sectionList);
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
              {itemList?.map(
                (x, index) => {
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
                          m={9}
                          ref={provided.innerRef}
                          border="1px"
                          borderColor="grey"
                        >
                          <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={3}>
                            <GridItem colSpan={2}>
                              <HStack>
                                <Image
                                  boxSize="60px"
                                  objectFit="cover"
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
                                    <MenuItem onClick={() => duplicate(x)}>
                                      Duplicate{" "}
                                    </MenuItem>
                                    <MenuItem
                                      onClick={() => handleRemove(index)}
                                    >
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
                }
              )}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ItemCard;
