import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  SimpleGrid,
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

const CreateMenu = () => {
  const { data } = MenuState();
  console.log(data, "create menu");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true);
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

          <SectionCard />
        </GridItem>
      </Grid>
    </>
  );
};

export default CreateMenu;
