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
import { MenuState } from "../../../context/MenuContext";

const SectionCard = (props) => {

  const { section, setSection, menu, setMenu } = MenuState()
  console.log(section)

  function sectionClick(index) {
    section[index].itemActive = !(section[index].itemActive)
    setSection([...section]);
    console.log(section, 'menu in sectiom')
  }

  return (
    <>
      {section.map((x, index) => (
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
                  {x.sectionName} {x.sectionDescription}
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

          {x.itemActive ? <ItemCard /> : console.log("false sss")}
        </Box>
      ))}
    </>
  );
};

export default SectionCard;
