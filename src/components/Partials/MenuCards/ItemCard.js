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
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";
import { MenuState } from "../../../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";

const ItemCard = (props) => {
  const { item, setItem, response, setResponse } = MenuState();
  const [itemList, setItemList] = useState(response);

  const handleRemove = (index) => {
    // console.log(index, 'handle remove')
    response[props.menu_index].section[props.section_index].item.splice(index, 1)
    setResponse([...response]);
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
    setResponse(updatedList);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
<<<<<<< HEAD
              {response[props.menu_index].section[props.section_index].item.map((x, index) => {
                return (
                  <Draggable
                    key={x.itemId}
                    draggableId={x.itemName}
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
=======
              {response[props.menu_index].section[props.section_index].item.map(
                (x, index) => {
                  return (
                    <Draggable
                      key={x.itemName}
                      draggableId={x.itemName}
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
>>>>>>> 52f01f155862c87fd0a26d52fa386689954a2348
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
