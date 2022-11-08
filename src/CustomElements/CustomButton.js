import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const CustomButton = (props) => {
  console.log(props.num, "num");
  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={props.click}>
        {props.btnText}
      </Button>
    </>
  );
};

export default CustomButton;
