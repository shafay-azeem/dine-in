import { CopyIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  Switch,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  SiFacebook,
  SiTiktok,
  SiTwitter,
  SiFoursquarecityguide,
  SiTripadvisor,
  SiSnapchat,
  SiZomato,
  SiInstagram,
} from "react-icons/si";
import { TbDeviceDesktop } from "react-icons/tb";
import { BsFillPersonPlusFill, BsPlusLg, BsSearch } from "react-icons/bs";
import AddTableDrawer from "./AddTableDrawer";
import AddStaffDrawer from "./AddStaffDrawer";
import CustomButton from "../../CustomElements/CustomButton";

const VenueSettings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    isOpen: isOpenStaff,
    onOpen: onOpenStaff,
    onClose: onCloseStaff,
  } = useDisclosure();
  const [discount, setDiscount] = useState([]);
  const [service, setService] = useState([]);
  const [tax, setTax] = useState([]);
  const [textArea, setTextArea] = useState("");

  const handleChange = (event) => {
    setTextArea(event.target.value);
  };

  const copyText = () => {
    navigator.clipboard.writeText(textArea);
    toast({
      title: "Copied.",
      description: "Your Text Has been Copied.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const addDiscount = (event) => {
    setDiscount(
      discount.concat(
        <HStack m={5}>
          <Input size="sm" borderRadius="8px" width="60%" placeholder="Name" />,
          <Select placeholder="Rate" size="sm" borderRadius="8px" width="40%">
            <option value="option1">$</option>
            <option value="option2">%</option>
          </Select>
          ,
          <Input
            type="tel"
            placeholder=""
            size="sm"
            borderRadius="8px"
            width="50%"
          />
          <Switch />
        </HStack>
      )
    );
  };
  const addServiceCharges = (event) => {
    setService(
      service.concat(
        <HStack m={5}>
          <Input size="sm" borderRadius="8px" width="60%" placeholder="Name" />,
          <Select placeholder="Rate" size="sm" borderRadius="8px" width="40%">
            <option value="option1">$</option>
            <option value="option2">%</option>
          </Select>
          ,
          <Input
            type="tel"
            placeholder=""
            size="sm"
            borderRadius="8px"
            width="50%"
          />
          <Switch />
        </HStack>
      )
    );
  };
  const addTaxes = (event) => {
    setTax(
      tax.concat(
        <HStack m={5}>
          <Input size="sm" borderRadius="8px" width="60%" placeholder="Name" />,
          <Select placeholder="Rate" size="sm" borderRadius="8px" width="40%">
            <option value="option1">$</option>
            <option value="option2">%</option>
          </Select>
          ,
          <Input
            type="tel"
            placeholder=""
            size="sm"
            borderRadius="8px"
            width="50%"
          />
          <Switch />
        </HStack>
      )
    );
  };
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Venue Settings
          </Text>
        </GridItem>
      </Grid>

      <Box m="10">
        <Tabs w="100%">
          <TabList>
            <Tab>Location Settings</Tab>
            <Tab>Social Accounts</Tab>
            <Tab>Tables</Tab>
            <Tab>Staff</Tab>
            <Tab>Extra Charges</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box bg="white" w="50%" p={4} borderRadius="10">
                <Center>
                  <Box w="70%">
                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Venue Name</FormLabel>
                      <Input type="Text" borderRadius="6" />
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Venue ID</FormLabel>
                      <InputGroup>
                        <Input
                          pr="1.5rem"
                          borderRadius="6"
                          onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={copyText}>
                            <CopyIcon />
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Address</FormLabel>
                      <Textarea borderRadius="6" />
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">City</FormLabel>
                      <Input type="Text" borderRadius="6" />
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Country</FormLabel>
                      <Select placeholder="Select country" borderRadius="6">
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                      </Select>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">State</FormLabel>
                      <Input type="Text" borderRadius="6" />
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Zip Code</FormLabel>
                      <Input type="Text" borderRadius="6" />
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Phone Number</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<PhoneIcon color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          placeholder="Phone number"
                          borderRadius="6"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Timezone</FormLabel>
                      <Select placeholder="Select country" borderRadius="6">
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                      </Select>
                      <FormHelperText>
                        Current date is 29/10/2022 13:12
                      </FormHelperText>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Website</FormLabel>
                      <Input type="Text" borderRadius="6" />
                    </FormControl>

                    <Center mt={5}>
                      <CustomButton btnText={" Save"} />
                    </Center>
                  </Box>
                </Center>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box bg="white" w="50%" p={4} borderRadius="10">
                <Center>
                  <Box w="70%">
                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Website</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<TbDeviceDesktop color="gray.300" />}
                        />
                        <Input type="text" borderRadius="6" size="md" />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Instagram</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SiInstagram color="gray.300" />}
                        />
                        <Input
                          type="text"
                          placeholder="instagram.com/"
                          borderRadius="6"
                          size="md"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Facebook</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SiFacebook color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          placeholder="facebook.com/"
                          borderRadius="6"
                          size="md"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Twitter</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SiTwitter color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          placeholder="twitter.com/"
                          borderRadius="6"
                          size="md"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Foursquare</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SiFoursquarecityguide color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          placeholder="foursquare.com/"
                          borderRadius="6"
                          size="md"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Trip Advisor</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SiTripadvisor color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          placeholder="tripadvisor.com/"
                          borderRadius="6"
                          size="md"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Snapchat</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SiSnapchat color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          placeholder="snapchat.com/add/"
                          borderRadius="6"
                          size="md"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Zomato</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SiZomato color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          placeholder="zomato.com/"
                          borderRadius="6"
                          size="md"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Tiktok</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<SiTiktok color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          placeholder="tiktok.com/@"
                          borderRadius="6"
                          size="md"
                        />
                      </InputGroup>
                    </FormControl>

                    <Center mt={5}>
                      <CustomButton btnText={" Save"} />
                    </Center>
                  </Box>
                </Center>
              </Box>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={4} mb={3}>
                <GridItem colSpan={2} w="65%">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsSearch color="gray.300" />}
                    />
                    <Input type="tel" placeholder="Search tables" bg="white" />
                  </InputGroup>
                </GridItem>
                <GridItem colStart={4} colEnd={6} textAlign="right">

                  <CustomButton click={onOpen} btnText={" Add New Tables"} />

                  {isOpen ? (
                    <AddTableDrawer
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onClose={onClose}
                    ></AddTableDrawer>
                  ) : (
                    console.log("sss")
                  )}

                </GridItem>
              </Grid>

              <TableContainer borderRadius={4}>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>
                        <Checkbox defaultChecked mr={5} />
                        Table Name
                      </Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={4} mb={3}>
                <GridItem colSpan={2} w="65%">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsSearch color="gray.300" />}
                    />
                    <Input
                      type="tel"
                      placeholder="Search staff members"
                      bg="white"
                    />
                  </InputGroup>
                </GridItem>
                <GridItem colStart={4} colEnd={6} textAlign="right">


                  <CustomButton click={onOpenStaff} btnText={" Add New Staff Member"} />

                  {isOpenStaff ? (
                    <AddStaffDrawer
                      isOpen={isOpenStaff}
                      onOpen={onOpenStaff}
                      onClose={onCloseStaff}
                    ></AddStaffDrawer>
                  ) : (
                    console.log("sss")
                  )}

                </GridItem>
              </Grid>

              <TableContainer borderRadius={4}>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>Name</Th>
                      <Th>Check Name</Th>
                      <Th>Pincode</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <Box bg="white" w="50%" p={4} borderRadius="10">
                <Center>
                  <Box w="90%">
                    <Box p={4}>
                      <Text fontSize="17px" fontWeight="500">
                        Discounts
                      </Text>

                      <CustomButton click={addDiscount} btnText={" Add Discounts"} variant={"outline"} leftIcon={<BsPlusLg />} mt={3} />

                      {discount}
                    </Box>

                    <Box p={4}>
                      <Text fontSize="17px" fontWeight="500">
                        Service Charges
                      </Text>



                      <CustomButton click={addServiceCharges} btnText={"Add Service Charges"} variant={"outline"} leftIcon={<BsPlusLg />} mt={3} />

                      {service}
                    </Box>

                    <Box p={4}>
                      <Text fontSize="17px" fontWeight="500">
                        Taxes
                      </Text>

                      <CustomButton click={addTaxes} btnText={"Add Taxes"} variant={"outline"} leftIcon={<BsPlusLg />} mt={3} />


                      {tax}
                    </Box>
                    <Center mt={5}>

                      <CustomButton btnText={" Save"} />
                    </Center>
                  </Box>
                </Center>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default VenueSettings;
