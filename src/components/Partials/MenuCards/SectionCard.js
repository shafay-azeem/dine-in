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
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { AiOutlineDown } from "react-icons/ai";
import { MenuState } from "../../../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsThreeDotsVertical } from "react-icons/bs";
import ItemDrawer from "../../MenuManagement/ItemDrawer";
import SectionDrawer from "../../MenuManagement/SectionDrawer";
import { SearchIcon } from "@chakra-ui/icons";

const SectionCard = (props) => {
  let menu_index = props?.menu_index;
  console.log(props.menu_index, "in section");
  const { section, setSection, response, setResponse } = MenuState();
  const [sectionList, setSectionList] = useState(
    response[props?.menu_index]?.section
  );
  const [status, setSatus] = useState();
  const [index, setIndex] = useState();
  const [count, setCount] = useState();

  const {
    isOpen: isOpenSection,
    onOpen: onOpenSection,
    onClose: onCloseSection,
  } = useDisclosure();

  const {
    isOpen: isOpenItem,
    onOpen: onOpenItem,
    onClose: onCloseItem,
  } = useDisclosure();



  const handleRemove = (index) => {


    response[menu_index]?.section.splice(index, 1);
    setResponse([...response]);
    setSectionList(response[props?.menu_index]?.section);

  };

  function switchStatus(index) {
    console.log("helloo je");
    response[props.menu_index].section[index].sectionStatus =
      !response[props.menu_index].section[index].sectionStatus;
    setResponse([...response]);
    setSectionList(response[props?.menu_index]?.section);
  }

  const duplicate = (x) => {
    let filterSec = [];

    function getTimestampInSeconds() {
      return Math.floor(Date.now() / 1000);
    }

    let sectionData = {
      sectionId: getTimestampInSeconds(),
      sectionName: x.sectionName,
      sectionDescription: x.sectionDescription,
      sectionStatus: x.sectionStatus,
      item: [],
    };
    console.log(menu_index);
    console.log(
      response[menu_index].section.push(sectionData),
      "section array"
    );
    setResponse([...response]);

  };

  function sectionClick(index) {
    setSatus(index);
    response[props.menu_index].section[index].active =
      !response[props.menu_index].section[index].active;
    setResponse([...response]);
  }

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...sectionList];
    console.log(updatedList, "updatedList");
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setSectionList(updatedList);

    console.log(updatedList, "kng");

    response[props?.menu_index].section.length = 0;
    response[props?.menu_index]?.section.push.apply(
      response[props?.menu_index]?.section,
      updatedList
    );

  };

  const getIndex = (index) => {
    setCount(index);
  };

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...sectionList];
    if (query === "") {
      setSectionList(response[props?.menu_index]?.section);
      return;
    } else {
      updatedList = updatedList.filter((item) => {
        return (
          item.sectionName.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      });
      setSectionList(updatedList);
    }
  };

  return (
    <>
      <Box mt={2}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search"
            bg="white"
            onChange={filterBySearch}
          />
        </InputGroup>
      </Box>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {sectionList?.map((x, index) => {
                return (
                  <Draggable
                    key={x.sectionId}
                    draggableId={x.sectionId.toString()}
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
                              {x.sectionStatus ? (
                                <Switch
                                  p={5}
                                  pl="55%"
                                  isChecked
                                  onChange={() => switchStatus(index)}
                                />
                              ) : (
                                <Switch
                                  p={5}
                                  pl="55%"
                                  onChange={() => switchStatus(index)}
                                />
                              )}
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
                                  <Box onClick={() => getIndex(index)}>
                                    <MenuItem onClick={onOpenItem}>
                                      Items
                                    </MenuItem>
                                  </Box>
                                  {isOpenItem ? (
                                    <ItemDrawer
                                      menu_index={menu_index}
                                      section_index={count}
                                      isOpen={isOpenItem}
                                      onOpen={onOpenItem}
                                      onClose={onCloseItem}
                                    ></ItemDrawer>
                                  ) : (
                                    console.log("sss")
                                  )}

                                  <Box onClick={() => getIndex(index)}>
                                    <MenuItem onClick={onOpenSection}>
                                      Edit
                                    </MenuItem>
                                  </Box>
                                  {isOpenSection ? (
                                    <SectionDrawer
                                      section_index={count}
                                      menu_index={menu_index}
                                      isOpen={isOpenSection}
                                      onOpen={onOpenSection}
                                      onClose={onCloseSection}
                                    ></SectionDrawer>
                                  ) : (
                                    console.log("sss")
                                  )}

                                  <MenuItem onClick={() => duplicate(x)}>
                                    Duplicate
                                  </MenuItem>
                                  <MenuItem onClick={() => handleRemove(index)}>
                                    Delete
                                  </MenuItem>
                                </MenuList>
                              </Menu>
                            </HStack>
                          </GridItem>
                        </Grid>

                        {x.active ? (
                          <ItemCard
                            menu_index={menu_index}
                            section_index={index}
                          />
                        ) : (
                          console.log("false sss")
                        )}
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
