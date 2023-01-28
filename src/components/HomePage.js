import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/Signup";
import UpdateUser from "./Authentication/UpdateUser";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      {/* 
            d="flex"
            justifyContent="center"
            p={3}
            bg={"white"}
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
        */}
      <Box
        boxSize="sm"
        d="flex"
        justifyContent="center"
        bg={"white"}
        w="100%"
        h="15%"
        borderRadius="lg"
        borderWidth="1px"
        m="40px 0 15px 0"
      >
        <Center>
          <Text
            margin="auto"
            resizeMode="contain"
            text-align="center"
            display="block"
            justify-content="center"
            align-items="center"
          >
            Dine In
          </Text>
          {/* <Image
            margin="auto"
            resizeMode="contain"
            text-align="center"
            display="block"
            justify-content="center"
            align-items="center"
            // src={Img}
          /> */}
        </Center>
        {/* <Text
              fontSize="4xl"
              fontFamily="Open Sans"
              alignSelf="center"
              bg={""}
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              d="flex"
              color="black"
            >
              Talk-A-Tive
            </Text> */}
      </Box>

      <Box
        p={4}
        bg={"white"}
        w="100%"
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
            {/* <Tab width="50%">Update Profile</Tab> */}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
            {/* <TabPanel>
              <UpdateUser />
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
