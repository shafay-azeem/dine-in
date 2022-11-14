import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import ItemCard from "./ItemCard";
import { AiOutlineDown } from "react-icons/ai";
import { MenuState } from "../../../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SectionCard = (props) => {
  const { section, setSection, menu, setMenu } = MenuState();


  const [sectionList, setSectionList] = useState(section);

  function sectionClick(index) {
    section[index].itemActive = !section[index].itemActive;
    setSection([...section]);
  }

  const handleDrop = (droppedItem) => {

    if (!droppedItem.destination) return;
    var updatedList = [...sectionList];

    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setSectionList(updatedList);
    setSection(updatedList)
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef} >
              {section.map((x, index) => {
                return (
                  <Draggable key={x.sectionName} draggableId={x.sectionName} index={index}>
                    {(provided) => (

                      <Box bg="white" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} borderRadius={6} p={5} mt={3} key={index}>
                        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                          <GridItem colSpan={2}>
                            <HStack>
                              <Image
                                boxSize="60px"
                                objectFit="cover"
                                src="https://bit.ly/dan-abramov"
                                alt="Dan Abramov"
                              />
                              <Text pl={2}>{x.sectionName}</Text>
                            </HStack>
                          </GridItem>
                          <GridItem colStart={4} colEnd={6}>
                            <HStack>
                              <Switch p={5} pl="55%" />
                              <AiOutlineDown onClick={() => sectionClick(index)} />
                              {/* <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => sectionClick(index)}
                ></Button> */}
                            </HStack>
                          </GridItem>
                        </Grid>

                        {x.itemActive ? <ItemCard /> : console.log("false sss")}
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

export default SectionCard;
