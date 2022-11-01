import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import SectionDrawer from "./SectionDrawer";

const CreateMenu = () => {
  const {
    isOpen: isOpenSection,
    onOpen: onOpenSection,
    onClose: onCloseSection,
  } = useDisclosure();
  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        m={10}
      >
        <GridItem rowSpan={2} colSpan={1} bg="white" borderRadius={6}>
          <Grid templateColumns="repeat(5, 1fr)" gap={4} p={5}>
            <GridItem colSpan={2}>Section</GridItem>
            <GridItem colStart={4} colEnd={6}></GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={4}>
          <Box bg="white" borderRadius={6} display="flex" p={5}>
            <VStack>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="teal"
                  size="sm"
                  variant="outline"
                  leftIcon={<BsPlusLg />}
                >
                  Add
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
                    <MenuItem>Item</MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default CreateMenu;
