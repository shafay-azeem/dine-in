import React from 'react'
import {
    Box, Button, Center, Divider, Grid, GridItem, Stack, Text, useDisclosure, Input, InputGroup, InputLeftElement,
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
    Radio, RadioGroup,

} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { ArrowForwardIcon, SearchIcon } from '@chakra-ui/icons';


const Customer = () => {
    const [checkedItems, setCheckedItems] = React.useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Date Range</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <RadioGroup defaultValue='1'>
                            <Stack>
                                <Stack spacing={200} direction='row'>
                                    <Radio value='2 ' colorScheme='green' >Today</Radio>
                                    <Text> Oct 26</Text>
                                </Stack>
                                <Stack spacing={170} direction='row'>
                                    <Radio value='3' colorScheme='green'  >This Week</Radio>
                                    <Text> Oct 23 - Oct 26</Text>
                                </Stack>

                                <Stack spacing={163} direction='row'>
                                    <Radio value='4' colorScheme='green' >This Month</Radio>
                                    <Text> Oct 1 - Oct 26</Text>
                                </Stack>


                                <Stack spacing={157} direction='row'>
                                    <Radio value='5' colorScheme='green' >This Quarter</Radio>
                                    <Text> Oct 1 - Oct 26</Text>
                                </Stack>


                                <Radio value='6' colorScheme='green' >This Year</Radio>
                                <Radio value='7' colorScheme='green' >All</Radio>
                                <Radio value='8' colorScheme='green' >Custom</Radio>


                            </Stack>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
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

            <Grid>
                <GridItem w="100%" bg="white" height="120%">
                    <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
                        Customers
                    </Text>
                </GridItem>
            </Grid>

            <Grid templateColumns="repeat(5, 1fr)" gap={3} p={1}>
                <GridItem colSpan={2} h="10" p={5}>
                    <Text fontWeight={600}>0 results Listed</Text>
                </GridItem>

                <GridItem colStart={3} h="10" textAlign="end" p={5}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300" />}
                        />
                        <Input type="text" placeholder="Search" bg="white" />
                    </InputGroup>
                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10" textAlign="end" p={5}>

                    <Button
                        leftIcon={<ArrowForwardIcon />}
                        colorScheme="teal"
                        variant="solid"
                        onClick={onOpen}
                    >
                        Export
                    </Button>

                </GridItem>

            </Grid>
            <Center mt={9}>
                <Box
                    bg="white"
                    border="1px"
                    borderColor="#FAFAFA"
                    borderRadius="10"
                    w="85%"
                >
                    <Divider orientation="horizontal" mt={2} />

                    <TableContainer>
                        <Table variant="simple">
                            <Thead backgroundColor="#FAFAFA">
                                <Tr>
                                    <Th>
                                        <Checkbox
                                            isChecked={checkedItems}
                                            onChange={(e) => setCheckedItems(e.target.checked)}
                                        >
                                            Customers
                                        </Checkbox>

                                    </Th>
                                    <Th>Tags</Th>
                                    <Th>Email</Th>
                                    <Th>Phone</Th>
                                    <Th>Total Orders</Th>
                                    <Th>Last Visit</Th>

                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td >25.4</Td>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td>25.4</Td>


                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Center>
        </>
    );
}
export default Customer
