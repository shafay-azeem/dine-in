import React from "react";
import { Grid, GridItem, Heading, Highlight, Text } from "@chakra-ui/react";

const WelcomeText = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} pl={10} mt={5}>
          <Highlight
            query="spotlight"
            styles={{ px: "1", py: "1", bg: "orange.100" }}
          >
            Monday, 24 October 00:48
          </Highlight>
          <Text fontWeight="Bold" fontSize="25">
            Your Restuarant Name, Welcome!
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default WelcomeText;
