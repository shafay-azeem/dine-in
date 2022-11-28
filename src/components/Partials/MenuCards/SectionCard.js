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
  InputRightElement,
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
import {
  AiFillDelete,
  AiFillEdit,
  AiFillFileAdd,
  AiOutlineArrowDown,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { MenuState } from "../../../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsThreeDotsVertical, BsXCircleFill } from "react-icons/bs";
import ItemDrawer from "../../MenuManagement/ItemDrawer";
import SectionDrawer from "../../MenuManagement/SectionDrawer";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { AiFillCopy } from "react-icons/ai";
import SubSectionCard from "./SubSectionCard";

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
  const [search, setSearch] = useState("");

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
      sectionNote: x.sectionNote,
      sectionLabel: x.sectionLabel,
      item: [],
      subSection: [],
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

  const clearMessage = () => {
    console.log(search, "searc");

    setSearch("");
    setSectionList(response[props?.menu_index]?.section);
  };

  var updatedList = [...sectionList];
  let updatedListTemp;
  const filterBySearch = (event) => {
    setSearch(event.target.value);
    const query = event.target.value;

    if (query === "") {
      setSectionList(response[props?.menu_index]?.section);
      return;
    } else {
      updatedListTemp = updatedList.filter((item) => {
        return (
          item.sectionName.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      });
      console.log(updatedList, "updatedList");

      setSectionList(updatedListTemp);
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
            value={search}
          />
          <InputRightElement width="4.5rem">
            <BsXCircleFill
              fontSize="13px"
              cursor="pointer"
              onClick={clearMessage}
            />
          </InputRightElement>
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
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        key={index}
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
                                {sectionList?.length == 0 ? (
                                  <Text>"NO DATA FOUND"</Text>
                                ) : (
                                  <Text pl={2}>
                                    {x.sectionName}
                                    {x.sectionStatus ? (
                                      <Badge
                                        ml="3"
                                        mb="3"
                                        p={1}
                                        fontSize="9"
                                        borderRadius={6}
                                        colorScheme="green"
                                      >
                                        Active
                                      </Badge>
                                    ) : (
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
                                    )}
                                  </Text>
                                )}
                              </HStack>
                            </GridItem>
                            <GridItem colStart={4} colEnd={6} h="10" ml="auto">
                              <HStack>
                                {x.sectionStatus ? (
                                  <Box py={2}>
                                    <Switch
                                      size="sm"
                                      isChecked
                                      onChange={() => switchStatus(index)}
                                    />
                                  </Box>
                                ) : (
                                  <Box py={2}>
                                    <Switch
                                      size="sm"
                                      onChange={() => switchStatus(index)}
                                    />
                                  </Box>
                                )}
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
                                          icon={<AiFillFileAdd />}
                                          onClick={onOpenItem}
                                        >
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
                                        console.log("Cant Open Item Drawer")
                                      )}

                                      <Box onClick={() => getIndex(index)}>
                                        <MenuItem
                                          icon={<AiFillEdit />}
                                          onClick={onOpenSection}
                                        >
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
                                        console.log(
                                          "Cant Open Section Drawer For Edit"
                                        )
                                      )}

                                      <MenuItem
                                        onClick={() => duplicate(x)}
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
                                <Box>
                                  {x.active ? (
                                    <AiOutlineUp
                                      onClick={() => sectionClick(index)}
                                    />
                                  ) : (
                                    <AiOutlineDown
                                      onClick={() => sectionClick(index)}
                                    />
                                  )}
                                </Box>
                              </HStack>
                            </GridItem>
                          </Grid>
                        </Box>

                        <Box ml="55px">
                          {x.active ? (
                            <ItemCard
                              menu_index={menu_index}
                              section_index={index}
                            />
                          ) : (
                            console.log("Cant Open Items")
                          )}
                        </Box>

                        <Box ml="55px">
                          {x.active ? (
                            <SubSectionCard
                              menu_index={menu_index}
                              section_index={index}
                            />
                          ) : (
                            console.log("Cant Open Items")
                          )}
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
    </>
  );
};

export default SectionCard;
