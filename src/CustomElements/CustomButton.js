import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const CustomButton = (props) => {
  return (
    <>
      <Button
        colorScheme="teal"
        size={props.size}
        onClick={props.click}
        variant={props.variant}
        leftIcon={props.leftIcon}
        mt={props.mt}
        mr={props.mr}
        mb={props.mb}
      >
        {props.btnText}
      </Button>
    </>
  );
};

export default CustomButton;
