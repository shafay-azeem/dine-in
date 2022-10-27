import React from 'react'
import {
    Box,
    Button,
    Center,
    Divider,
    Grid,
    GridItem,
    Stack,
    Text,
    useDisclosure,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";

const CustomerModal = (props) => {
    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Date Range</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <RadioGroup defaultValue="1">
                            <Stack>
                                <Stack spacing={200} direction="row">
                                    <Radio value="2 " colorScheme="green">
                                        Today
                                    </Radio>
                                    <Text> Oct 26</Text>
                                </Stack>
                                <Stack spacing={170} direction="row">
                                    <Radio value="3" colorScheme="green">
                                        This Week
                                    </Radio>
                                    <Text> Oct 23 - Oct 26</Text>
                                </Stack>

                                <Stack spacing={163} direction="row">
                                    <Radio value="4" colorScheme="green">
                                        This Month
                                    </Radio>
                                    <Text> Oct 1 - Oct 26</Text>
                                </Stack>

                                <Stack spacing={157} direction="row">
                                    <Radio value="5" colorScheme="green">
                                        This Quarter
                                    </Radio>
                                    <Text> Oct 1 - Oct 26</Text>
                                </Stack>

                                <Radio value="6" colorScheme="green">
                                    This Year
                                </Radio>
                                <Radio value="7" colorScheme="green">
                                    All
                                </Radio>
                                <Radio value="8" colorScheme="green">
                                    Custom
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={props.onClose}>
                            Cancel
                        </Button>
                        <Button
                            leftIcon={<ArrowForwardIcon />}
                            colorScheme="teal"
                            variant="solid"
                        >
                            Export
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CustomerModal
