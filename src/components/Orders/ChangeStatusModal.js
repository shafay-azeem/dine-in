import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  Radio,
  Stack,
  Button,
  useToast,
  Text,
  Divider,
} from "@chakra-ui/react";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { MenuState } from "../../context/MenuContext";

const ChangeStatusModal = (props) => {
  const toast = useToast();
  const [value, setValue] = React.useState();

  const { statusUpdate, setStatusUpdate } = MenuState();

  let userId = localStorage.getItem("user_id");
  let id = props?.id;

  async function updateStatusOfOrder(value) {
    let Data = {
      orderStatus: value,
    };

    try {
      let updateStatusOfOrder = await apiFunctions.PUT_REQUEST(
        BASE_URL + API_URL.CHANGE_STATUS + userId + `?orderId=${id}`,
        Data
      );
      if (updateStatusOfOrder.data.success == true) {
        toast({
          position: "top",
          title: `Order Status Updated`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });

        setStatusUpdate(Math.random());
        props.onClose();
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
    } catch (err) {
      console.log("An error occurred while updating status", err.message);
    }
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Change order status of {id}</ModalHeader> */}
          <Text fontSize="xl" className="m-3">
            Change order status of {id}
          </Text>
          <Divider />
          <ModalCloseButton />
          <ModalBody className="m-4">
            <RadioGroup onChange={setValue} value={value}>
              <Stack>
                <Radio
                  value="Preparing"
                  onClick={() => updateStatusOfOrder("Preparing")}
                >
                  Preparing
                </Radio>
                <Radio
                  value="Ready"
                  onClick={() => updateStatusOfOrder("Ready")}
                >
                  Ready
                </Radio>
                <Radio
                  value="On Delivery"
                  onClick={() => updateStatusOfOrder("On Delivery")}
                >
                  On Delivery
                </Radio>
                <Radio
                  value="Delivered"
                  onClick={() => updateStatusOfOrder("Delivered")}
                >
                  Delivered
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangeStatusModal;
