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
} from "@chakra-ui/react";
import React from "react";
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

const VenueSettings = () => {
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
                        <Input pr="1.5rem" borderRadius="6" />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm">
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
                      <Button colorScheme="blue" w="15%">
                        Save
                      </Button>
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
                      <Button colorScheme="blue" w="15%">
                        Save
                      </Button>
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
                  <Button
                    leftIcon={<BsPlusLg />}
                    colorScheme="teal"
                    variant="solid"
                    size="md"
                  >
                    Add New Tables
                  </Button>
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
                  <Button
                    leftIcon={<BsFillPersonPlusFill />}
                    colorScheme="teal"
                    variant="solid"
                    size="md"
                  >
                    Add New Staff Member
                  </Button>
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
                  <Box w="70%"></Box>
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
