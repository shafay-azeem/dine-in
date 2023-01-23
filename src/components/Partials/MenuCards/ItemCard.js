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

const ItemCard = (props) => {

  let subSecId = props?.subsection_index;
  console.log(subSecId);
  let secid = props?.section_index;
  let section_Or_subSection = props?.fromSection;
  // const initialState = Number.isInteger(props?.subsection_index)
  //   ? response[props?.menu_index]?.section[props?.section_index]?.subSection[
  //       props?.subsection_index
  //     ].item
  //   : response[props?.menu_index]?.section[props?.section_index]?.item;

  // const [itemList, setItemList] = useState(initialState);
  const [itemList, setItemList] = useState();

  const [count, setCount] = useState();
  const [checked, setChecked] = useState(false);

  const {
    isOpen: isOpenItem,
    onOpen: onOpenItem,
    onClose: onCloseItem,
  } = useDisclosure();

  const getIndex = (index) => {
    setCount(index);
  };

  useEffect(() => {
    if (section_Or_subSection === "section" && secid) {
      console.log('Inside IF')
      getAllItemsBySectionId();
    }
    else if (section_Or_subSection === "subSection" && subSecId) {
      console.log(subSecId)
      console.log("else run");
      getAllSubItemsBySubSectionId();
    } else {
      return;
    }

  }, []);

  async function getAllItemsBySectionId() {
    let getItems = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.Get_All_Item_By_SectionId + secid
    );

    let res = getItems.data.item;
    console.log(res, 'res1')
    setItemList(res);
  }



  async function getAllSubItemsBySubSectionId() {
    let getItems = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_SUB_ITEM_BY_SUBSECTION_ID + subSecId
    );
    // console.log(getItems, 'getItems')
    let res = getItems.data.item;
    console.log(res, 'res2')
    setItemList(res);
  }

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_ITEM_BY_ID + id)
      .then((res) => {
        if (res.data.success == true) {
          console.log(res.data.success);
          alert(`${res.data.message}`);
          return true;
        } else {
          alert(`There Some Error`);
          return false;
        }
      });
    // if (Number.isInteger(props?.subsection_index) == true) {
    //   response[props.menu_index].section[props.section_index].subSection[
    //     props.subsection_index
    //   ].item.splice(index, 1);
    //   setResponse([...response]);
    //   setItemList(
    //     response[props.menu_index].section[props.section_index].subSection[
    //       props.subsection_index
    //     ].item
    //   );
    // } else {
    //   response[props.menu_index].section[props.section_index].item.splice(
    //     index,
    //     1
    //   );
    //   setResponse([...response]);
    //   setItemList(response[props.menu_index].section[props.section_index].item);
    // }
  };

  const duplicate = (x, y) => {
    // function getTimestampInSeconds() {
    //   return Math.floor(Date.now() / 1000);
    // }
    // let itemData = {
    //   itemId: getTimestampInSeconds(),
    //   itemName: x.itemName,
    //   itemDescription: x.itemDescription,
    //   active: x.active,
    //   itemPrice: x.itemPrice,
    //   itemCalorie: x.itemCalorie,
    //   itemTag: x.itemTag,
    //   itemLabel: x.itemLabel,
    //   itemWarning: x.itemWarning,
    //   itemPrepTime: x.itemPrepTime,
    //   itemCalories: x.itemCalories,
    //   itemPriceOption: x.itemPriceOption,
    //   itemSaturatedFatPercentage: x.itemSaturatedFatPercentage,
    //   itemTransFat: x.itemTransFat,
    //   itemTransFatPercentage: x.itemTransFatPercentage,
    //   itemCholesterol: x.itemCholesterol,
    //   itemCholesterolPercentage: x.itemCholesterolPercentage,
    //   itemSodium: x.itemSodium,
    //   itemSodiumPercentage: x.itemSodiumPercentage,
    //   itemTotalCarbs: x.itemTotalCarbs,
    //   itemTotalCarbsPercentage: x.itemTotalCarbsPercentage,
    //   itemDietaryFiber: x.itemDietaryFiber,
    //   itemDietaryFiberPercentage: x.itemDietaryFiberPercentage,
    //   itemSugar: x.itemSugar,
    //   itemSugarPercentage: x.itemSugarPercentage,
    //   itemProtein: x.itemProtein,
    //   itemProteinPercentage: x.itemProteinPercentage,
    //   itemVitaminA: x.itemVitaminA,
    //   itemVitaminC: x.itemVitaminC,
    //   itemIron: x.itemIron,
    //   itemCalcium: x.itemCalcium,
    //   itemTotalFat: x.itemTotalFat,
    //   itemTotalFatPercentage: x.itemTotalFatPercentage,
    //   itemSaturatedFat: x.itemSaturatedFat,
    //   itemNutritionCalories: x.itemNutritionCalories,
    //   itemCaloriesFat: x.itemCaloriesFat,
    //   itemServingSize: x.itemServingSize,
    //   image: x.image,
    // };
    // if (y != null) {
    //   setResponse([...response]);
    // } else {
    //   setResponse([...response]);
    // }
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
  function switchStatus(index) {
    // if (Number.isInteger(props?.subsection_index)) {
    //   response[props.menu_index].section[props.section_index].subSection[
    //     props.subsection_index
    //   ].item[index].active =
    //     !response[props.menu_index].section[props.section_index].subSection[
    //       props.subsection_index
    //     ].item[index].active;
    //   setResponse([...response]);
    //   setItemList(
    //     response[props.menu_index].section[props.section_index].subSection[
    //       props.subsection_index
    //     ].item
    //   );
    // } else {
    //   response[props.menu_index].section[props.section_index].item[
    //     index
    //   ].active =
    //     !response[props.menu_index].section[props.section_index].item[index]
    //       .active;
    //   setResponse([...response]);
    //   setItemList(
    //     response[props?.menu_index]?.section[props?.section_index]?.item
    //   );
    // }
  }
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
                                <Image
                                  boxSize="43px"
                                  objectFit="cover"
                                  borderRadius={3}
                                  src={x.itemImage}
                                />

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
                                {/* <Box>
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
                                        ${x.itemPriceOption[0].price}
                                      </Box>
                                    ) : (
                                      <Box
                                        style={{
                                          border: "1px solid black",
                                          paddingLeft: "5px",
                                          paddingRight: "5px",
                                        }}
                                      >
                                        ${x.itemPriceOption[0].price} ━━━ $
                                        {
                                          x.itemPriceOption[
                                            x.itemPriceOption.length - 1
                                          ].price
                                        }
                                      </Box>
                                    )}

                                  
                                  </InputGroup>
                                </Box> */}

                                <BootstrapSwitchButton
                                  checked={x.active}
                                  onChange={() => switchStatus(index)}
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
                                          item_index={count}
                                          isOpen={isOpenItem}
                                          onOpen={onOpenItem}
                                          onClose={onCloseItem}
                                        ></ItemDrawer>
                                      ) : null}

                                      <MenuItem
                                        onClick={() =>
                                          duplicate(x, props?.subsection_index)
                                        }
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
