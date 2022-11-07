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
import { useState } from "react";

const SectionCard = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true);
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
    </>
  );
};

export default SectionCard;
