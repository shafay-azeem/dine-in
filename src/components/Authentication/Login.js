import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          //   onChange={(e) => setEmail(e.target.value)}
          //   value={email}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            // type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button> */}
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        // onClick={submitHandler}
        // isLoading={loading}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
