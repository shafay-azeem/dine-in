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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    if (!email || !password) {
      alert("Please Enter All Fields");
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
            alert(`${res.data.message}`);
            setEmail("");
            setPassword("");
            localStorage.setItem("token", res.data.token);
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
      alert(`There Some Error ${err}`);
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
