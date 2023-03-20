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
import img from "../components/Assets/DINE-IN.png";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("resUserName");
    localStorage.removeItem("currencySymbol");

    // if (!token && !user_id) {
    //   return navigate("/");
    // }
  }, ["/"]);

  return (
    <Container maxW="xl" centerContent>
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
          <Image
            margin="auto"
            resizeMode="contain"
            text-align="center"
            display="block"
            justify-content="center"
            align-items="center"
            src={img}
          />
        </Center>
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
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
