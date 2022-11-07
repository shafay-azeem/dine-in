import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ItemCard = () => {
  return (
    <>
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
    </>
  );
};

export default ItemCard;
