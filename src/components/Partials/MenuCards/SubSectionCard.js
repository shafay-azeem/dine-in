import {
  Badge,
  Box,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import {
  AiFillCopy,
  AiFillDelete,
  AiFillEdit,
  AiFillFileAdd,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MenuState } from "../../../context/MenuContext";
import ItemDrawer from "../../MenuManagement/ItemDrawer";
import SectionDrawer from "../../MenuManagement/SectionDrawer";
import ItemCard from "./ItemCard";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import apiFunctions from "../../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../../global/Constant";
import { useEffect } from "react";

const SubSectionCard = (props) => {
  const { subSectionList, setSubSectionList } = MenuState();

  // const [subSectionList, setSubSectionList] = useState();

  let menu_index = props.menu_index;
  let section_index = props?.section_index;

  console.log(section_index, "section_index");

  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
    // console.log(isOpened);
  }

  // let subSecRes =
  //   response[props?.menu_index]?.section[props?.section_index]?.subSection;

  // const [subSectionList, setSubSectionList] = useState(subSecRes);
  const [count, setCount] = useState();

  const {
    isOpen: isOpenItem,
    onOpen: onOpenItem,
    onClose: onCloseItem,
  } = useDisclosure();

  const {
    isOpen: isOpenSection,
    onOpen: onOpenSection,
    onClose: onCloseSection,
  } = useDisclosure();
  const [status, setSatus] = useState();

  useEffect(() => {
    getAllSubSectionBySectionId();
  }, []);

  async function getAllSubSectionBySectionId() {
    let getSubSection = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.Get_All_SUBSECTION_BY_SECTIONID + section_index
    );

    let res = getSubSection.data.subSection;
    console.log(res);
    setSubSectionList(res);
  }

  const switchStatus = async (x, id) => {
    let sectionData = {
      sectionStatus: !x.sectionStatus,
    };

    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDATE_SUBSECTION_BY_ID + id, sectionData)
      .then((res) => {
        if (res.data.success == true) {
          alert(`Sub Section Updated Successfully`);
          return true;
        } else {
          alert(`There Some Error`);
          return false;
        }
      });

    // subSecRes[index].sectionStatus = !subSecRes[index].sectionStatus;
    // setResponse([...response]);
    // setSubSectionList(subSecRes);
  };

  const getIndex = (index) => {
    setCount(index);
  };

  const duplicate = async (x) => {
    let sectionData = {
      sectionName: x.sectionName,
      sectionDescription: x.sectionDescription,
      sectionNote: x.sectionNote,
      sectionLabel: x.sectionLabel,
      sectionStatus: x.sectionStatus,
      sectionImage: x.sectionImage,
    };

    await apiFunctions
      .POST_REQUEST(
        BASE_URL + API_URL.CREATE_SUBSECTION + section_index,
        sectionData
      )
      .then((res) => {
        if (res.data.success == true) {
          alert(`SUB SECTION DUPLICATED SUCCESSFULLY`).then((res) => {
            setSubSectionList(res);
            return true;
          });
        } else {
          alert(`There Some Error`);
          return false;
        }
      });
    // function getTimestampInSeconds() {
    //   return Math.floor(Date.now() / 1000);
    // }
    // let sectionData = {
    //   sectionId: getTimestampInSeconds(),
    //   sectionName: x.sectionName,
    //   sectionDescription: x.sectionDescription,
    //   sectionStatus: x.sectionStatus,
    //   image: x.image,
    //   item: [],
    //   subSection: [],
    // };
    // setResponse([...response]);
  };

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_SUBSECTION_BY_ID + id)
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
    // subSecRes.splice(index, 1);
    // setResponse([...response]);
    // setSubSectionList(subSecRes);
  };

  function sectionClick(index) {
    // setSatus(index);
    // response[props.menu_index].section[section_index].subSection[index].active =
    //   !response[props.menu_index].section[section_index].subSection[index]
    //     .active;
    // setResponse([...response]);
  }

  return (
    <>
      {subSectionList?.map((x, index) => {
        return (
          <Box>
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
                              subsection_index={count}
                              section_index={section_index}
                              menu_index={menu_index}
                              subsection_push={true}
                              isOpen={isOpenItem}
                              onOpen={onOpenItem}
                              onClose={onCloseItem}
                            ></ItemDrawer>
                          ) : null}

                          <Box onClick={() => getIndex(x._id)}>
                            <MenuItem
                              icon={<AiFillEdit />}
                              onClick={onOpenSection}
                            >
                              Edit
                            </MenuItem>
                          </Box>

                          {isOpenSection ? (
                            <SectionDrawer
                              fromSection={'subSection'}
                              subsection_index={count}
                              section_index={section_index}
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
                      {isOpened ? (
                        <AiOutlineUp onClick={toggle} />
                      ) : (
                        <AiOutlineDown onClick={toggle} />
                      )}
                    </Box>
                  </HStack>
                </GridItem>
              </Grid>
            </Box>

            <Box ml="55px">
              {x.isOpened ? (
                <ItemCard
                  // menu_index={menu_index}
                  // section_index={section_index}
                  subsection_index={x._id}
                />
              ) : null}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default SubSectionCard;
