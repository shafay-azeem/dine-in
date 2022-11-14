import {
  Box,
  Button,
  Divider,
  Flex,
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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";

const ItemCard = () => {
  const { item, setItem } = MenuState();

  const [itemList, setItemList] = useState(item);

  function handleRemove(index) {
    setItem([item.slice(0, index), ...item.slice(index + 1, item.length)]);
  }


  function duplicate(x) {
    item.push(x);
  }

  const handleDrop = (droppedItem) => {

    if (!droppedItem.destination) return;
    var updatedList = [...itemList];

    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setItemList(updatedList);
    setItem(updatedList)
  };


  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}  >
              {itemList.map((x, index) => {
                return (
                  <Draggable key={x.itemName} draggableId={x.itemName} index={index}>
                    {(provided) => (
                      <Box {...provided.draggableProps} {...provided.dragHandleProps} m={9} ref={provided.innerRef} border='1px' borderColor='grey'>
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

                                  <MenuItem onClick={() => duplicate(x)}
                                  >Duplicate </MenuItem>
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
                )
              })
              }
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ItemCard;
