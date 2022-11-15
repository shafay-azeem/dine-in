import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  SimpleGrid,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { MenuState } from "../../context/MenuContext";
import CustomButton from "../../CustomElements/CustomButton";

import SectionCard from "../Partials/MenuCards/SectionCard";
import ItemDrawer from "./ItemDrawer";
import SectionDrawer from "./SectionDrawer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useNavigate, useSearchParams } from "react-router-dom";

const CreateMenu = () => {
  const { data } = MenuState();
  const { section, setSection } = MenuState();
  const [sectionList, setSectionList] = useState(section);

  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true);

  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  let menu_index = searchparams.get("id")

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

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...sectionList];

    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setSectionList(updatedList);
    setSection(updatedList);
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
              <AddIcon ml={9} onClick={onOpenSection} />
            </GridItem>
          </Grid>
          <SimpleGrid>
            <Box textAlign="center">
              <ButtonGroup variant="outline" spacing="0" size="sm">
                <Button>All</Button>
                <Button>Active</Button>
                <Button>InActive</Button>
              </ButtonGroup>
            </Box>
            <DragDropContext onDragEnd={handleDrop}>
              <Droppable droppableId="droppable-1">
                {(provided) => (
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    {section.map((x, index) => {
                      return (
                        <Draggable
                          key={x.sectionName}
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
                              <UnorderedList>
                                <ListItem>{x.sectionName}</ListItem>
                              </UnorderedList>
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
            <VStack>
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
                          isOpen={isOpenSection}
                          onOpen={onOpenSection}
                          onClose={onCloseSection}
                        ></SectionDrawer>
                      ) : (
                        console.log("sss")
                      )}
                    </MenuItem>
                    <MenuItem onClick={onOpenItem}>
                      Items
                      {isOpenItem ? (
                        <ItemDrawer
                          isOpen={isOpenItem}
                          onOpen={onOpenItem}
                          onClose={onCloseItem}
                        ></ItemDrawer>
                      ) : (
                        console.log("sss")
                      )}
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </VStack>
          </Box>

          <SectionCard menu_index={menu_index} />
        </GridItem>
      </Grid>
    </>
  );
};

export default CreateMenu;
