import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const CustomButton = (props) => {
  console.log(props.num, "num");
  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={props.click} variant={props.variant} leftIcon={props.leftIcon} mt={props.mt}>
        {props.btnText}
      </Button>
    </>
  );
};

export default CustomButton;
