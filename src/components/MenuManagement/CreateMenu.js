import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Switch,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import ItemDrawer from "./ItemDrawer";
import SectionDrawer from "./SectionDrawer";

const CreateMenu = () => {
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

  function test() {
    setToggle(true);
    setShow(false);
  }

  function test2() {
    setToggle(false);
    setShow(true);
  }

  const data = [
    {
      id: 1,
      menuId: 101,
      name: "Alfredo Paste",
    },
    {
      id: 2,
      menuId: 102,
      name: "Sushi",
    },
    {
      id: 3,
      menuId: 103,
      name: "Zinger ",
    },
  ];

  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        m={10}
      >
        <GridItem rowSpan={2} colSpan={1} bg="white" borderRadius={6} h="20%">
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

          {data.map((x) => (
            <Box bg="white" borderRadius={6} p={5} mt={3} key={x.menuId}>
              <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                  <HStack>
                    <Image
                      boxSize="60px"
                      objectFit="cover"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                    <Text pl={2}>{x.name}</Text>
                  </HStack>
                </GridItem>
                <GridItem colStart={4} colEnd={6}>
                  <HStack>
                    <Switch p={5} pl="55%" />
                    {show ? (
                      <Button colorScheme="teal" size="sm" onClick={test}>
                        Show
                      </Button>
                    ) : (
                      <Button colorScheme="teal" size="sm" onClick={test2}>
                        Hide
                      </Button>
                    )}
                  </HStack>
                </GridItem>
              </Grid>
            </Box>
          ))}

          {toggle ? (
            <Box bg="white" borderRadius={6} p={5} mt={3}>
              <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                  <HStack>
                    <Image
                      boxSize="60px"
                      objectFit="cover"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                    <Text pl={2}>Your Item Name</Text>
                  </HStack>
                </GridItem>
                <GridItem colStart={4} colEnd={6}>
                  <HStack>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.500"
                        fontSize="1.2em"
                        children="$"
                      />
                      <Input placeholder="Enter amount" />
                    </InputGroup>
                    <Switch p={5} />
                    <Menu>
                      <MenuButton>
                        <BsThreeDotsVertical as={Button} />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Duplicate</MenuItem>
                        <MenuItem>Delete</MenuItem>
                      </MenuList>
                    </Menu>
                  </HStack>
                </GridItem>
              </Grid>
            </Box>
          ) : (
            console.log("sss")
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default CreateMenu;
