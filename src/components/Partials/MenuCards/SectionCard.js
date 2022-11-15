import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { AiOutlineDown } from "react-icons/ai";
import { MenuState } from "../../../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsThreeDotsVertical } from "react-icons/bs";
import ItemDrawer from "../../MenuManagement/ItemDrawer";

const SectionCard = (props) => {

  let menu_index = props?.menu_index
  console.log(props.menu_index, "in section");
  const { section, setSection, response, setResponse } = MenuState();
  const [sectionList, setSectionList] = useState(response);
  const [status, setSatus] = useState();
  const [index, setIndex] = useState();

  const {
    isOpen: isOpenItem,
    onOpen: onOpenItem,
    onClose: onCloseItem,
  } = useDisclosure();

  // console.log(response[1].section, "section")

  // function online(index) {
  //   if (status === status) {
  //     section[index].active = true;
  //     setSection([...section]);

  //   } else {
  //     console.log("if not woks", index)
  //   }
  // }

  function sectionClick(index) {
    response[props.menu_index].section[index].active = !response[props.menu_index].section[index].active
    setResponse([...response]);
  }

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...sectionList];

    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setSectionList(updatedList);
    setResponse(updatedList);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {response[props?.menu_index]?.section?.map((x, index) => {
                return (
                  <Draggable
                    key={x.sectionId}
                    draggableId={x.sectionId}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        bg="white"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        borderRadius={6}
                        p={5}
                        mt={3}
                        key={index}
                      >
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
                              <AiOutlineDown
                                onClick={() => sectionClick(index)}
                              />
                              {/* <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => sectionClick(index)}
                ></Button> */}
                              <Menu>
                                <MenuButton>
                                  <BsThreeDotsVertical as={Button} />
                                </MenuButton>
                                <MenuList>
                                  <MenuItem onClick={onOpenItem}>
                                    Items
                                    {isOpenItem ? (
                                      <ItemDrawer
                                        menu_index={menu_index}
                                        section_index={index}
                                        isOpen={isOpenItem}
                                        onOpen={onOpenItem}
                                        onClose={onCloseItem}
                                      ></ItemDrawer>
                                    ) : (
                                      console.log("sss")
                                    )}
                                  </MenuItem>
                                  <MenuItem>Duplicate</MenuItem>
                                  <MenuItem>Delete</MenuItem>
                                </MenuList>
                              </Menu>
                            </HStack>
                          </GridItem>
                        </Grid>

                        {x.active ? <ItemCard
                          menu_index={menu_index}
                          section_index={index} /> : console.log("false sss")}
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
    </>
  );
};

export default SectionCard;
