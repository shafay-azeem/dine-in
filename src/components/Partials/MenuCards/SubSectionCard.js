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
import { useToast } from "@chakra-ui/react";

const SubSectionCard = (props) => {
  const {
    setUpdatedSubSection,
    updatedSubSection,
    setCreateSubSection,
    createSubSection,
    sectionList,
    setSectionList,
  } = MenuState();
  const toast = useToast();
  const [subSectionList, setSubSectionList] = useState([]);
  const [subSectionUpdate, setSubSectionUpdate] = useState(false);

  const [subSectionDuplicate, setSubSectionDuplicate] = useState(false);
  const [subSectionDelete, setSubSectionDelete] = useState(false);
  const [toggler, setToggler] = useState(false);

  let menu_index = props.menu_index;
  let section_index = props?.section_index;

  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

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
    if (!toggler) {
      getAllSubSectionBySectionId();
    } else {
      return;
    }
    setSubSectionUpdate(false);
    setSubSectionDuplicate(false);
    setSubSectionDelete(false);
    setUpdatedSubSection(false);
    setCreateSubSection(false);
  }, [
    subSectionUpdate,
    subSectionDuplicate,
    subSectionDelete,
    createSubSection,
    updatedSubSection,
    section_index,
    toggler,
  ]);

  async function getAllSubSectionBySectionId() {
    let getSubSection = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.Get_All_SUBSECTION_BY_SECTIONID + section_index
    );

    let res = getSubSection.data.subSection;

    setSubSectionList(res);
    setToggler(false);
  }

  const switchStatus = async (x, id) => {
    let sectionData = {
      sectionStatus: !x.sectionStatus,
    };

    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDATE_SUBSECTION_BY_ID + id, sectionData)
      .then((res) => {
        if (res.data.success == true) {
          setSubSectionUpdate(true);
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
      sectionToggle: x.sectionToggle,
      sectionImage: x.sectionImage,
    };

    await apiFunctions
      .POST_REQUEST(
        BASE_URL + API_URL.CREATE_SUBSECTION + section_index,
        sectionData
      )
      .then((res) => {
        if (res.data.success == true) {
          // console.log(res, "res");
          toast({
            position: "top",
            title: `Sub Section Duplicated Successfully`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setSubSectionDuplicate(true);
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
  };

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_SUBSECTION_BY_ID + id)
      .then((res) => {
        if (res.data.success == true) {
          // console.log(res.data.success);

          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setSubSectionDelete(true);
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
  };

  const sectionClick = async (x, id) => {
    let ind = sectionList.findIndex((element) => {
      return element._id == section_index;
    });
    let subInd = sectionList[ind].subSection.findIndex((elementSub) => {
      return elementSub._id == id;
    });

    sectionList[ind].subSection[subInd].sectionToggle = !x.sectionToggle;
    setSubSectionList(sectionList[ind].subSection);
    setToggler(Math.random());
  };

  return (
    <>
      {subSectionList?.map((x, index) => {
        return (
          <Box key={index}>
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
                              icon={<AiFillFileAdd />}
                              onClick={onOpenItem}
                            >
                              Items
                            </MenuItem>
                          </Box>
                          {isOpenItem ? (
                            <ItemDrawer
                              fromSection={"subSection"}
                              subSection_index={count}
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
                              fromSection={"subSection"}
                              subsection_index={count}
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
                        <AiOutlineUp onClick={() => sectionClick(x, x._id)} />
                      ) : (
                        <AiOutlineDown onClick={() => sectionClick(x, x._id)} />
                      )}
                    </Box>
                  </HStack>
                </GridItem>
              </Grid>
            </Box>

            <Box ml="55px">
              {x.sectionToggle ? (
                <ItemCard fromSection={"subSection"} subsection_index={x._id} />
              ) : null}

              {/* {x.isOpened ? (
              <ItemCard
                fromSection={"subSection"}
                // menu_index={menu_index}
                // section_index={section_index}
                subsection_index={x._id}
              />
              ) : null}} */}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default SubSectionCard;
