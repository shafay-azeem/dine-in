import {
  Stack,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const SignUp = () => {
  const auth = useAuth();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [resName, setResName] = useState();
  const [resImg, setResImg] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const toast = useToast();

  const pictureCapture = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "dineInApp");
    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dkq6jers7/image/upload", {
        method: "post",
        body: formData
      });
      const data = await res.json();
      setResImg(data.url.toString());
      console.log(data.url.toString());
    } catch (err) {
      console.log(err);
    }
  };


  const submitHandler = async () => {
    if (!email || !password || !name || !resName) {
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
    if (password !== confirmpassword) {
      toast({
        position: "top",
        title: `Password donot match`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    let userData = {
      name: name,
      email: email,
      password: password,
      resName: resName,
      resImage: resImg
    };

    await apiFunctions
      .POST_REQUEST(BASE_URL + API_URL.CREATE_USER, userData)
      .then((res) => {
        // console.log(res);
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          auth.login(res.data.user.name);
          localStorage.setItem("user_id", res.data.user._id);

          localStorage.setItem("token", res.data.token);
          navigate({
            pathname: "/homeScreen",
          });

          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return false;
        }
      });
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="resName" isRequired>
        <FormLabel>Restaurant Name</FormLabel>
        <Input
          placeholder="Enter Your Restaurant Name"
          onChange={(e) => setResName(e.target.value)}
        />
      </FormControl>
      <FormControl mt={3}>
        <FormLabel fontWeight="400">Upload Your Restaurant Image</FormLabel>
        <Input
          size="sm"
          type="file"
          accept=".jpg,.png"
          onChange={pictureCapture}
          id="img"
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      // isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
