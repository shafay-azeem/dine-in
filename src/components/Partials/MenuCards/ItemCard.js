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
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";
import { MenuState } from "../../../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";
import ItemDrawer from "../../MenuManagement/ItemDrawer";
import {
  AiFillCopy,
  AiFillDelete,
  AiFillEdit,
  AiFillFileAdd,
  AiOutlineConsoleSql,
} from "react-icons/ai";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import { useToast } from "@chakra-ui/react";

const ItemCard = (props) => {
  const [itemUpdate, setItemUpdate] = useState(false);
  const [subItemUpdate, setSubItemUpdate] = useState(false);

  const { itemUpdater, setItemUpdater } = MenuState();
  let subSecId = props?.subsection_index;
  let secid = props?.section_index;
  let section_Or_subSection = props?.fromSection;

  const [itemList, setItemList] = useState();

  const [itemDecider, setItemDecider] = useState();
  const toast = useToast();

  const [count, setCount] = useState();
  const [checked, setChecked] = useState(false);
  const [subItemDeleted, setSubItemDeleted] = useState(false);
  const [itemDeleted, setItemDeleted] = useState(false);
  const [subItemDuplicate, setSubItemDuplicate] = useState(false);
  const [itemDuplicate, setItemDuplicate] = useState(false);

  const {
    isOpen: isOpenItem,
    onOpen: onOpenItem,
    onClose: onCloseItem,
  } = useDisclosure();

  const getIndex = (index) => {
    setCount(index);
  };

  let currencySymbol = localStorage.getItem("currencySymbol");

  useEffect(() => {
    if (section_Or_subSection === "section" && secid) {
      setItemDecider("item");
      getAllItemsBySectionId();
      setItemDeleted(false);
      setItemDuplicate(false);
      setItemUpdater(false);
      setItemUpdate(false);
    } else if (section_Or_subSection === "subSection" && subSecId) {
      setItemDecider("subItem");
      getAllSubItemsBySubSectionId();
      setSubItemDeleted(false);
      setSubItemDuplicate(false);
      setItemUpdater(false);
      setSubItemUpdate(false);
    } else {
      return;
    }
  }, [
    subItemDeleted,
    itemDeleted,
    subItemDuplicate,
    itemDuplicate,
    itemUpdater,
    secid,
    itemUpdate,
    subItemUpdate,
  ]);

  async function getAllItemsBySectionId() {
    let getItems = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.Get_All_Item_By_SectionId + secid
    );

    let res = getItems.data.item;

    setItemList(res);
  }

  async function getAllSubItemsBySubSectionId() {
    let getItems = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_SUB_ITEM_BY_SUBSECTION_ID + subSecId
    );

    let res = getItems.data.item;

    setItemList(res);
  }

  const handleRemove = async (id) => {
    if (itemDecider === "item" && id) {
      await apiFunctions
        .DELETE_REQUEST(BASE_URL + API_URL.DELETE_ITEM_BY_ID + id)
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Item Deleted SuccessFully`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            setItemDeleted(true);
            return true;
          } else {
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 1000,
              isClosable: true,
            });
            return false;
          }
        });
    } else {
      await apiFunctions
        .DELETE_REQUEST(BASE_URL + API_URL.DELETE_SUB_ITEM_BY_ID + id)
        .then((res) => {
          if (res.data.success == true) {
            // console.log(res.data.success);

            // alert(`${res.data.message}`);
            toast({
              position: "top",
              title: `Sub Item Deleted`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            setSubItemDeleted(true);
            return true;
          } else {
            //alert(`There Some Error`);
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 1000,
              isClosable: true,
            });
            return false;
          }
        });
    }
  };

  const duplicate = async (x) => {
    let itemData = {
      itemName: x.itemName,
      itemImage: x.itemImage,
      itemDescription: x.itemDescription,
      active: x.active,
      itemCalorie: x.itemCalorie,
      itemTag: x.itemTag,
      itemLabel: x.itemLabel,
      itemRecommendedItems: x.itemRecommendedItems,
      itemWarning: x.itemWarning,
      itemPrepTime: x.itemPrepTime,
      itemPrice: x.itemPrice,
      itemCalories: x.itemCalories,
      itemPriceOption: x.itemPriceOption,
      itemSaturatedFatPercentage: x.itemSaturatedFatPercentage,
      itemTransFat: x.itemTransFat,
      itemTransFatPercentage: x.itemTransFatPercentage,
      itemCholesterol: x.itemCholesterol,
      itemCholesterolPercentage: x.itemCholesterolPercentage,
      itemSodium: x.itemSodium,
      itemSodiumPercentage: x.itemSodiumPercentage,
      itemTotalCarbs: x.itemTotalCarbs,
      itemTotalCarbsPercentage: x.itemTotalCarbsPercentage,
      itemDietaryFiber: x.itemDietaryFiber,
      itemDietaryFiberPercentage: x.itemDietaryFiberPercentage,
      itemSugar: x.itemSugar,
      itemSugarPercentage: x.itemSugarPercentage,
      itemProtein: x.itemProtein,
      itemProteinPercentage: x.itemProteinPercentage,
      itemVitaminA: x.itemVitaminA,
      itemVitaminC: x.itemVitaminC,
      itemIron: x.itemIron,
      itemCalcium: x.itemCalcium,
      itemTotalFat: x.itemTotalFat,
      itemTotalFatPercentage: x.itemTotalFatPercentage,
      itemSaturatedFat: x.itemSaturatedFat,
      itemNutritionCalories: x.itemNutritionCalories,
      itemCaloriesFat: x.itemCaloriesFat,
      itemServingSize: x.itemServingSize,
      itemModifier: x.itemModifier,
    };

    if (itemDecider === "item") {
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.CREATE_ITEM + secid, x)
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Item Duplicated SuccessFully`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            setItemDuplicate(true);
            return true;
          } else {
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 1000,
              isClosable: true,
            });
            setSubItemDuplicate(true);
            return false;
          }
        });
    } else {
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.CREATE_SUB_ITEM + subSecId, x)
        .then((res) => {
          if (res.data.success == true) {
            //alert(`SUB ITEM CREATED SUCCESSFULLY`);
            toast({
              position: "top",
              title: `Sub Item Duplicated SuccessFully`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            setSubItemDuplicate(true);
            return true;
          } else {
            // alert(`There Some Error`);
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 1000,
              isClosable: true,
            });
            return false;
          }
        });
    }
  };

  const handleDrop = (droppedItem) => {
    // if (!droppedItem.destination) return;
    // var updatedList = [...itemList];
    // const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // setItemList(updatedList);
    // response[props.menu_index].section[props.section_index].item.length = 0;
    // response[props?.menu_index]?.section[props?.section_index]?.item.push.apply(
    //   response[props?.menu_index]?.section[props?.section_index]?.item,
    //   updatedList
    // );
  };
  const switchStatus = async (x, id) => {
    let itemRes = {
      active: !x.active,
    };

    if (section_Or_subSection === "section") {
      await apiFunctions
        .PUT_REQUEST(BASE_URL + API_URL.UPDATE_ITEM_BY_ID + id, itemRes)
        .then((res) => {
          if (res.data.success == true) {
            setItemUpdate(true);
            return true;
          } else {
            //alert(`There Some Error`);
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 1000,
              isClosable: true,
            });
            setSubItemDuplicate(true);
            return false;
          }
        });
    } else if (section_Or_subSection === "subSection") {
      await apiFunctions
        .PUT_REQUEST(BASE_URL + API_URL.UPDATE_SUB_ITEM_BY_ID + id, itemRes)
        .then((res) => {
          if (res.data.success == true) {
            setSubItemUpdate(true);

            return true;
          } else {
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 1000,
              isClosable: true,
            });
            return false;
          }
        });
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {itemList?.map((x, index) => {
                return (
                  <Draggable
                    key={x._id}
                    draggableId={x._id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Box bg="white" w="100%" p={4} borderRadius={6} mt={2}>
                          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                            <GridItem colSpan={2} h="10">
                              <HStack>
                                {x.itemImage ? (
                                  <Image
                                    boxSize="43px"
                                    objectFit="cover"
                                    borderRadius={3}
                                    src={x.itemImage}
                                  />
                                ) : (
                                  <Image
                                    boxSize="43px"
                                    objectFit="cover"
                                    borderRadius={3}
                                    src={require("../../Assets/image.png")}
                                  />
                                )}

                                <Text pl={2}>
                                  {x.active ? (
                                    <Box>
                                      <HStack>
                                        <Box
                                          bg="#28B463"
                                          width="7px"
                                          borderRadius={8}
                                          height="7px"
                                          mt={1}
                                        ></Box>
                                        <Text>{x.itemName}</Text>
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
                                        <Text>{x.itemName}</Text>
                                      </HStack>
                                    </Box>
                                  )}
                                  {x.itemTag ? (
                                    <Badge
                                      ml="3"
                                      mb="3"
                                      p={1}
                                      fontSize="9"
                                      borderRadius={6}
                                      colorScheme="green"
                                    >
                                      Sold Out
                                    </Badge>
                                  ) : null}
                                </Text>
                              </HStack>
                            </GridItem>

                            <GridItem colStart={4} colEnd={6} h="10" ml="auto">
                              <HStack>
                                <Box>
                                  <InputGroup>
                                    {x.itemPriceOption[0].price ==
                                    x.itemPriceOption[
                                      x.itemPriceOption.length - 1
                                    ].price ? (
                                      <Box
                                        style={{
                                          border: "1px solid black",
                                          paddingLeft: "5px",
                                          paddingRight: "5px",
                                        }}
                                      >
                                        {currencySymbol}&nbsp;
                                        {x.itemPriceOption[0].price}
                                      </Box>
                                    ) : (
                                      <Box
                                        style={{
                                          border: "1px solid black",
                                          paddingLeft: "5px",
                                          paddingRight: "5px",
                                        }}
                                      >
                                        {currencySymbol}&nbsp;
                                        {x.itemPriceOption[0].price} &nbsp; ━━━
                                        &nbsp;
                                        {currencySymbol}&nbsp;
                                        {
                                          x.itemPriceOption[
                                            x.itemPriceOption.length - 1
                                          ].price
                                        }
                                      </Box>
                                    )}
                                  </InputGroup>
                                </Box>

                                <BootstrapSwitchButton
                                  checked={x.active}
                                  onChange={() => switchStatus(x, x._id)}
                                  size="sm"
                                  onlabel="on"
                                  offlabel="off"
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
                                          onClick={onOpenItem}
                                          icon={<AiFillEdit />}
                                        >
                                          Edit
                                        </MenuItem>
                                      </Box>

                                      {isOpenItem ? (
                                        <ItemDrawer
                                          // menu_index={props.menu_index}
                                          // section_index={props.section_index}
                                          // subsection_index={
                                          //   props.subsection_index
                                          // }
                                          itemDecider={itemDecider}
                                          item_index={count}
                                          isOpen={isOpenItem}
                                          onOpen={onOpenItem}
                                          onClose={onCloseItem}
                                        ></ItemDrawer>
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
                              </HStack>
                            </GridItem>
                          </Grid>
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

export default ItemCard;
