import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const PurchaseModal = (props) => {
  const [show, setShow] = useState(false);


  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUplooaded);
  };
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Promotion</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel fontWeight="400">Promotion Name</FormLabel>
              <Input placeholder="New Year Promotion" />
            </FormControl>

            <FormControl isRequired mt={5}>
              <FormLabel fontWeight="400">Description</FormLabel>
              <Input placeholder="10% Discount" />
            </FormControl>

            <FormControl mt={5}>
              <FormLabel fontWeight="400">Favorite Naruto Character</FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="Time Based">Time Based</Radio>
                  <Radio value="Selection Based">Selection Based</Radio>
                  <Radio value="Banner Based">Banner Based</Radio>
                </HStack>
                {/* <FormHelperText>
                  Promotion is displayed after a certain time.
                </FormHelperText> */}
              </RadioGroup>
            </FormControl>



            <Button onClick={handleClick}>
              Upload a file
            </Button>
            <input type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{ display: 'none' }}
            />

            <FormControl mt={5}>
              <FormLabel fontWeight="400">Display After</FormLabel>
              <NumberInput size="sm" maxW={24} min={2}>
                <NumberInputField placeholder="sec" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl mt={5}>
              <FormLabel fontWeight="400">Promotion Close</FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="1" onChange={() => setShow(false)}>
                    Keep the promotion open until the user closes.
                  </Radio>
                  <Radio value="2" onChange={() => setShow(true)}>
                    Close promotion after x seconds.
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            {show ? (
              <FormControl mt={5}>
                <FormLabel fontWeight="400">Promotion Duration</FormLabel>
                <NumberInput size="sm" maxW={24} min={2}>
                  <NumberInputField placeholder="sec" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            ) : (
              console.log("Sss")
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save Draft
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PurchaseModal;
