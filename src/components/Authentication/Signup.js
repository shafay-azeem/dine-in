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
import Select from "react-select";

const SignUp = () => {
  const auth = useAuth();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [resName, setResName] = useState();
  const [resImg, setResImg] = useState();

  const [resUserName, setResUserName] = useState();

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const toast = useToast();

  const [value, setValue] = useState();

  // let currencySymbol = value?.symbol;

  const options = [
    {
      symbol: "$",
      label: "US Dollar",
      code: "USD",
      name_plural: "US dollars",
    },
    {
      symbol: "€",
      label: "Euro",
      code: "EUR",
      name_plural: "euros",
    },
    {
      symbol: "¥",
      label: "Japanese Yen",
      code: "JPY",
      name_plural: "Japanese yen",
    },
    {
      symbol: "£",
      label: "British Pound Sterling",
      code: "GBP",
      name_plural: "British pounds sterling",
    },
    {
      symbol: "AU$",
      label: "Australian Dollar",
      code: "AUD",
      name_plural: "Australian dollars",
    },
    {
      symbol: "CA$",
      label: "Canadian Dollar",
      code: "CAD",
      name_plural: "Canadian dollars",
    },
    {
      symbol: "CHF",
      label: "Swiss Franc",
      code: "CHF",
      name_plural: "Swiss francs",
    },
    {
      symbol: "CHF",
      label: "Swiss Franc",
      code: "CHF",
      name_plural: "Swiss francs",
    },
  ];

  const pictureCapture = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "dineInApp");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkq6jers7/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await res.json();
      setResImg(data.url.toString());
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async () => {
    if (!email || !password || !name || !resName || !resUserName) {
      //alert("Please Enter All Fields");
      toast({
        position: "top",
        title: `Please Enter All Fields`,
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    if (password !== confirmpassword) {
      toast({
        position: "top",
        title: `Password donot match`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    let userData = {
      name: name,
      email: email,
      password: password,
      resName: resName,
      resImage: resImg,
      resUserName: resUserName,
      currencySymbol: value,
    };

    await apiFunctions
      .POST_REQUEST(BASE_URL + API_URL.CREATE_USER, userData)
      .then((res) => {
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          auth.login(res.data.user.name);
          localStorage.setItem("user_id", res.data.user._id);

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("resUserName", res.data.user.resUserName);
          localStorage.setItem(
            "currencySymbol",
            res.data.user.currencySymbol.symbol
          );
          navigate({
            pathname: "/homeScreen",
          });

          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 1000,
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

      <FormControl id="resUserName" isRequired>
        <FormLabel>Restaurant User Name</FormLabel>
        <Input
          placeholder="Enter Your Restaurant User Name"
          onChange={(e) => setResUserName(e.target.value)}
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

      <div className="w-100">
        <FormLabel>Choose Currency</FormLabel>
        <Select options={options} onChange={setValue} />
      </div>

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
