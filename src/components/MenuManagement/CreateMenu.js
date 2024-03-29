import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { MenuState } from "../../context/MenuContext";
import CustomButton from "../../CustomElements/CustomButton";

import SectionCard from "../Partials/MenuCards/SectionCard";
import SectionDrawer from "./SectionDrawer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useEffect } from "react";

const CreateMenu = () => {
  const [searchparams] = useSearchParams();
  let menu_index = searchparams.get("id");

  const {
    section,
    setSection,
    sectionList,
    setSectionList,
    changer,
    subChanger,
    setSubChanger,
  } = MenuState();

  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true);
  const [hit, setHit] = useState();
  const navigate = useNavigate();

  const [filter, setFilter] = useState();

  const {
    isOpen: isOpenSection,
    onOpen: onOpenSection,
    onClose: onCloseSection,
  } = useDisclosure();

  useEffect(() => {
    getAllSectionByMenuId();
  }, [menu_index, changer, subChanger]);

  async function getAllSectionByMenuId() {
    let getSection = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_SECTION_BY_MENU_ID + menu_index
    );

    let res = getSection.data.section;
    setFilter(res);
  }

  const handleDrop = (droppedItem) => {
    // if (!droppedItem.destination) return;
    // var updatedList = [...sectionList];
    // const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // setSectionList(updatedList);
    // setSection(updatedList);
  };

  const myfunc = (event) => {
    setHit(event.target.value);
    let responseSec = sectionList;
    let filterSec = [];

    if (event.target.value === "All") {
      return getAllSectionByMenuId();
    }
    if (event.target.value === "Active") {
      for (let i = 0; i < responseSec.length; i++) {
        if (responseSec[i].sectionStatus == true) {
          filterSec.push(responseSec[i]);
        }
      }
    }
    if (event.target.value === "InActive") {
      for (let i = 0; i < responseSec.length; i++) {
        if (responseSec[i].sectionStatus == false) {
          filterSec.push(responseSec[i]);
        }
      }
    }
    setFilter(filterSec);
  };

  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        m={10}
      >
        <GridItem rowSpan={2} colSpan={1} bg="white" borderRadius={6} h="90%">
          <Grid templateColumns="repeat(5, 1fr)" gap={4} p={5}>
            <GridItem colSpan={2}>Section</GridItem>
            <GridItem colStart={4} colEnd={6}>
              {/* <AddIcon ml={9} onClick={onOpenSection} /> */}
            </GridItem>
          </Grid>
          <SimpleGrid>
            <Box textAlign="center">
              <ButtonGroup
                variant="outline"
                spacing="0"
                size="sm"
                onClick={(e) => myfunc(e)}
              >
                <Button value="All">All</Button>
                <Button value="Active">Active</Button>
                <Button value="InActive">InActive</Button>
              </ButtonGroup>
            </Box>
            <DragDropContext onDragEnd={handleDrop}>
              <Droppable droppableId="droppable-1">
                {(provided) => (
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    {filter?.map((x, index) => {
                      return (
                        <Draggable
                          key={x._id}
                          draggableId={x.sectionName}
                          index={index}
                        >
                          {(provided) => (
                            <Box
                              pl={9}
                              mt={3}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              key={index}
                            >
                              {x.sectionStatus ? (
                                <Box>
                                  <HStack>
                                    <Box
                                      bg="#28B463"
                                      width="7px"
                                      borderRadius={8}
                                      height="7px"
                                      mt={1}
                                    ></Box>

                                    <Text>{x.sectionName}</Text>
                                  </HStack>
                                </Box>
                              ) : (
                                <Box>
                                  <HStack>
                                    <Box
                                      bg="#D7DBDD"
                                      width="7px"
                                      borderRadius={8}
                                      height="7px"
                                      mt={1}
                                    ></Box>

                                    <Text>{x.sectionName}</Text>
                                  </HStack>
                                </Box>
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
          </SimpleGrid>
        </GridItem>

        <GridItem colSpan={4}>
          <Box bg="white" borderRadius={6} display="flex" p={5}>
            <HStack>
              <Menu>
                <MenuButton>
                  <CustomButton
                    btnText={" Add"}
                    variant={"outline"}
                    leftIcon={<BsPlusLg />}
                    mt={3}
                    size={"sm"}
                  />
                </MenuButton>

                <Portal>
                  <MenuList>
                    <MenuItem onClick={onOpenSection}>
                      Section
                      {isOpenSection ? (
                        <SectionDrawer
                          menu_index={menu_index}
                          isOpen={isOpenSection}
                          onOpen={onOpenSection}
                          onClose={onCloseSection}
                        ></SectionDrawer>
                      ) : null}
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </HStack>
          </Box>
          <SectionCard menu_index={menu_index} />
        </GridItem>
      </Grid>
    </>
  );
};

export default CreateMenu;
