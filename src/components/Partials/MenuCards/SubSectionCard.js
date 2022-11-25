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

const SubSectionCard = (props) => {
  const { response, setResponse } = MenuState();
  let menu_index = props.menu_index;
  let section_index = props.section_index;

  let subSecRes =
    response[props?.menu_index]?.section[props?.section_index]?.subSection;

  const [subSectionList, setSubSectionList] = useState(subSecRes);
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

  function switchStatus(index) {
    console.log("Switch Status Func Work");
    subSecRes[index].sectionStatus = !subSecRes[index].sectionStatus;
    setResponse([...response]);
    setSubSectionList(subSecRes);
  }

  const getIndex = (index) => {
    setCount(index);
  };

  const duplicate = (x) => {
    function getTimestampInSeconds() {
      return Math.floor(Date.now() / 1000);
    }
    let sectionData = {
      sectionId: getTimestampInSeconds(),
      sectionName: x.sectionName,
      sectionDescription: x.sectionDescription,
      sectionStatus: x.sectionStatus,
      item: [],
      subSection: [],
    };
    console.log(menu_index);
    console.log(subSecRes.push(sectionData), "section array");
    setResponse([...response]);
  };

  const handleRemove = (index) => {
    subSecRes.splice(index, 1);
    setResponse([...response]);
    setSubSectionList(subSecRes);
  };

  function sectionClick(index) {
    setSatus(index);
    response[props.menu_index].section[section_index].subSection[index].active =
      !response[props.menu_index].section[section_index].subSection[index]
        .active;
    console.log(
      response[props.menu_index].section[section_index].subSection[index].active
    );
    setResponse([...response]);
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
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
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
                              subsection_index={count}
                              section_index={section_index}
                              menu_index={menu_index}
                              subsection_push={true}
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
                              subsection_index={count}
                              section_index={section_index}
                              menu_index={menu_index}
                              isOpen={isOpenSection}
                              onOpen={onOpenSection}
                              onClose={onCloseSection}
                            ></SectionDrawer>
                          ) : (
                            console.log("Cant Open Section Drawer For Edit")
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
                        <AiOutlineUp onClick={() => sectionClick(index)} />
                      ) : (
                        <AiOutlineDown onClick={() => sectionClick(index)} />
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
                  section_index={section_index}
                  subsection_index={index}
                />
              ) : (
                console.log("Cant Open Items")
              )}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default SubSectionCard;
