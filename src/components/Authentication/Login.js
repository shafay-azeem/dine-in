import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    if (!email || !password) {
      //alert("Please Enter All Fields");
      toast({
        position: "top",
        title: `Please Enter All Fields`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    try {
      let userData = {
        email: email,
        password: password,
      };
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.LOGIN, userData)
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `${res.data.message}`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            auth.login(res.data.user.name);
            setEmail("");
            setPassword("");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.user._id);
            navigate({
              pathname: "/homeScreen",
            });
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
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
