import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";

const UpdateUser = () => {
  const toast = useToast();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const submitHandler = async () => {
    if (!name && !email) {
      //alert("Please Enter All Fields");
      toast({
        position: "top",
        title: `You Haven't Updated Any Information`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    try {
      let userData = {
        name: name,
        email: email,
      };

      await apiFunctions
        .PUT_REQUEST(BASE_URL + API_URL.UPDATE_PROFILE, userData)
        .then((res) => {
          if (res.data.success == true) {
            // console.log(res.data);
            toast({
              position: "top",
              title: `Updated SuccessFully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setName("");
            setEmail("");

            return true;
          } else {
            alert(`There Some Error---`);
            return false;
          }
        });
    } catch (err) {
      toast({
        position: "top",
        title: `There Some Error`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="xl" centerContent marginTop="10rem">
      <Box
        p={4}
        bg={"white"}
        w="100%"
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <VStack spacing="5px">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
          >
            Update
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default UpdateUser;
