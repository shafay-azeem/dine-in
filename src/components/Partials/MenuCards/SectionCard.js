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
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import apiFunctions from "../../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../../global/Constant";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const SectionCard = (props) => {
  const toast = useToast();
  let menu_index = props?.menu_index;
  // console.log(menu_index);
  const { sectionList, setSectionList } = MenuState();
  const [status, setSatus] = useState();
  const [index, setIndex] = useState();
  const [count, setCount] = useState();
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState();
  const [sectionIndex, setSectionIndex] = useState();
  const [sectionDelete, setSectionDelete] = useState(false);

  // const [isOpened, setIsOpened] = useState(false);

  // function toggle() {
  //   setIsOpened((wasOpened) => !wasOpened);
  // }

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

  useEffect(() => {
    if (!search) {
      getAllSectionByMenuId();
    }
  }, [sectionDelete]);

  async function getAllSectionByMenuId() {
    let getSection = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_SECTION_BY_MENU_ID + menu_index
    );

    let res = getSection.data.section;
    setSectionList(res);
  }

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_SECTION_BY_ID + id)
      .then((res) => {
        if (res.data.success == true) {
          // console.log(res.data.success);
          // alert(`${res.data.message}`);
          toast({
            position: "top",
            title: `Section Deleted SuccessFully`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setSectionDelete(true);
          return true;
        } else {
          // alert(`There Some Error`);
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return false;
        }
      });

    // response[menu_index]?.section.splice(index, 1);
    // setResponse([...response]);
    // setSectionList(response[props?.menu_index]?.section);
  };

  const switchStatus = async (x, id) => {
    let sectionData = {
      sectionStatus: !x.sectionStatus,
    };

    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDATE_SECTION_BY_ID + id, sectionData)
      .then((res) => {
        if (res.data.success == true) {
          //alert(`Section Updated Successfully`);
          // toast({
          //   position: "top",
          //   title: `Section Updated Successfully`,
          //   status: "success",
          //   duration: 9000,
          //   isClosable: true,
          // });
          console.log("Section Status Updated");
          return true;
        } else {
          //alert(`There Some Error`);
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return false;
        }
      });

    // console.log(sectionList, "sectionList");

    // sectionList[id].sectionStatus = !sectionList[id].sectionStatus;

    // setSectionList([...sectionList]);
    // sectionList[id].sectionStatus = !sectionList[id].sectionStatus;
    // setSectionList([...sectionList]);
  };

  const duplicate = async (x) => {
    let sectionData = {
      sectionName: x.sectionName,
      sectionDescription: x.sectionDescription,
      sectionNote: x.sectionNote,
      sectionLabel: x.sectionLabel,
      sectionStatus: x.sectionStatus,
      sectionToggle: x.sectionToggle,
      sectionImage: x.sectionImage,
    };

    await apiFunctions
      .POST_REQUEST(BASE_URL + API_URL.CREATE_SECTION + menu_index, sectionData)
      .then((res) => {
        if (res.data.success == true) {
          // alert(`SECTION DUPLICATED SUCCESSFULLY`)
          toast({
            position: "top",
            title: `Section Duplicated SuccessFully`,
            status: "success",
            duration: 9000,
            isClosable: true,
          }).then((res) => {
            setSectionList(res);
            return true;
          });
        } else {
          //alert(`There Some Error`);
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return false;
        }
      });
  };

  const sectionClick = async (x, id) => {
    console.log(id, "id");
    console.log(x, "x");

    let sectionData = {
      sectionToggle: !x.sectionToggle,
    };

    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDATE_SECTION_BY_ID + id, sectionData)
      .then((res) => {
        if (res.data.success == true) {
          // alert(`${res.data.message}`);
          // toast({
          //   position: "top",
          //   title: `Section Updated SuccessFully`,
          //   status: "success",
          //   duration: 9000,
          //   isClosable: true,
          // });
          console.log("section status updated");
          return true;
        } else {
          // alert(`There Some Error`);
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return false;
        }
      });

    // setSatus(index);
    // response[props.menu_index].section[index].active =
    // response[props.menu_index].section[index].active;
    // setResponse([...response]);
  };
  const handleDrop = (droppedItem) => {
    // if (!droppedItem.destination) return;
    // var updatedList = [...sectionList];
    // const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // setSectionList(updatedList);
    // response[props?.menu_index].section.length = 0;
    // response[props?.menu_index]?.section.push.apply(
    //   response[props?.menu_index]?.section,
    //   updatedList
    // );
  };

  const getIndex = (id) => {
    setCount(id);
  };

  const clearMessage = () => {
    setSearch("");
    getAllSectionByMenuId();
  };

  var updatedList = [...sectionList];
  let updatedListTemp;
  const filterBySearch = (event) => {
    setSearch(event.target.value);
    const query = event.target.value;
    if (query === "") {
      getAllSectionByMenuId();
      return;
    } else {
      updatedListTemp = updatedList.filter((item) => {
        return (
          item.sectionName.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      });
      console.log(updatedListTemp);
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
                  <Draggable key={x._id} draggableId={x._id} index={index}>
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
                                  src={x.sectionImage}
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
                                <BootstrapSwitchButton
                                  checked={x.sectionStatus}
                                  onChange={() => switchStatus(x, x._id)}
                                  data-size="xs"
                                />

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
                                      <Box onClick={() => getIndex(x._id)}>
                                        <MenuItem
                                          icon={<AiFillFileAdd />}
                                          onClick={onOpenItem}
                                        >
                                          Items
                                        </MenuItem>
                                      </Box>
                                      {isOpenItem ? (
                                        <ItemDrawer
                                          fromSection={"section"}
                                          section_index={count}
                                          isOpen={isOpenItem}
                                          onOpen={onOpenItem}
                                          onClose={onCloseItem}
                                        ></ItemDrawer>
                                      ) : null}

                                      <Box
                                        onClick={() => getIndex(x._id, index)}
                                      >
                                        <MenuItem
                                          icon={<AiFillEdit />}
                                          onClick={onOpenSection}
                                        >
                                          Edit
                                        </MenuItem>
                                      </Box>

                                      {isOpenSection ? (
                                        <SectionDrawer
                                          fromSection={"section"}
                                          new_index={sectionIndex}
                                          section_index={count}
                                          menu_index={menu_index}
                                          isOpen={isOpenSection}
                                          onOpen={onOpenSection}
                                          onClose={onCloseSection}
                                        ></SectionDrawer>
                                      ) : null}

                                      <MenuItem
                                        onClick={() => duplicate(x)}
                                        icon={<AiFillCopy />}
                                      >
                                        Duplicate
                                      </MenuItem>
                                      <MenuItem
                                        onClick={() => handleRemove(x._id)}
                                        icon={<AiFillDelete />}
                                      >
                                        Delete
                                      </MenuItem>
                                    </MenuList>
                                  </Menu>
                                </Box>

                                <Box>
                                  {x.sectionToggle ? (
                                    <AiOutlineUp
                                      onClick={() => sectionClick(x, x._id)}
                                    />
                                  ) : (
                                    <AiOutlineDown
                                      onClick={() => sectionClick(x, x._id)}
                                    />
                                  )}
                                </Box>
                              </HStack>
                            </GridItem>
                          </Grid>
                        </Box>

                        <Box ml="55px">
                          {x.sectionToggle ? (
                            <ItemCard
                              fromSection={"section"}
                              section_index={x._id}
                            />
                          ) : null}
                        </Box>

                        <Box ml="55px">
                          {x.sectionToggle ? (
                            <SubSectionCard section_index={x._id} />
                          ) : null}
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
