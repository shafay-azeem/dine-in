import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import ItemCard from "./ItemCard";
import { AiOutlineDown } from "react-icons/ai";

const SectionCard = () => {
  const [data, setData] = useState([
    {
      id: 0,
      menuId: 101,
      name: "Menu One",
      active: false,
    },
    {
      id: 1,
      menuId: 102,
      name: "Menu Two",
      active: false,
    },
    {
      id: 2,
      menuId: 103,
      name: "Menu Three",
      active: false,
    },
  ]);

  function sectionClick(id) {
    setData([...data], (data[id].active = !data[id].active));
  }

  return (
    <>
      {data.map((x, index) => (
        <Box bg="white" borderRadius={6} p={5} mt={3} key={index}>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <HStack>
                <Image
                  boxSize="60px"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
                <Text pl={2}>
                  {x.name} {x.active}
                </Text>
              </HStack>
            </GridItem>
            <GridItem colStart={4} colEnd={6}>
              <HStack>
                <Switch p={5} pl="55%" />

                <AiOutlineDown onClick={() => sectionClick(index)} />

                {/* <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => sectionClick(index)}
                ></Button> */}
              </HStack>
            </GridItem>
          </Grid>

          {x.active ? <ItemCard /> : console.log("ss")}
        </Box>
      ))}
    </>
  );
};

export default SectionCard;
