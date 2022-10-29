import { CopyIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
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
import { TbBrandInstagram, TbDeviceDesktop } from "react-icons/tb";

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
      <Box ml="10" mt={5}>
        <Tabs>
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
                <FormControl mt={5}>
                  <FormLabel fontWeight="400">Venue Name</FormLabel>
                  <Input type="Text" w="60%" size="sm" borderRadius="6" />
                </FormControl>

                <FormControl mt={5} w="60%">
                  <FormLabel fontWeight="400">Venue ID</FormLabel>
                  <InputGroup size="sm">
                    <Input pr="1.5rem" borderRadius="6" />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm">
                        <CopyIcon />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl w="60%" mt={5}>
                  <FormLabel fontWeight="400">Address</FormLabel>
                  <Textarea size="sm" borderRadius="6" />
                </FormControl>

                <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={5}>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel fontWeight="400">City</FormLabel>
                      <Input type="Text" w="80%" size="sm" borderRadius="6" />
                    </FormControl>
                  </GridItem>
                  <GridItem colStart={3} colEnd={7}>
                    <FormControl>
                      <FormLabel fontWeight="400">Country</FormLabel>
                      <Select
                        placeholder="Select country"
                        w="80%"
                        borderRadius="6"
                        size="sm"
                      >
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                </Grid>

                <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={5}>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel fontWeight="400">State</FormLabel>
                      <Input type="Text" w="80%" size="sm" borderRadius="6" />
                    </FormControl>
                  </GridItem>
                  <GridItem colStart={3} colEnd={7}>
                    <FormControl>
                      <FormLabel fontWeight="400">Zip Code</FormLabel>
                      <Input type="Text" w="80%" size="sm" borderRadius="6" />
                    </FormControl>
                  </GridItem>
                </Grid>

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
                      w="60%"
                      borderRadius="6"
                      size="sm"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mt={5} w="60%">
                  <FormLabel fontWeight="400">Timezone</FormLabel>
                  <Select
                    placeholder="Select country"
                    size="sm"
                    borderRadius="6"
                  >
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                  </Select>
                  <FormHelperText>
                    Current date is 29/10/2022 13:12
                  </FormHelperText>
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel fontWeight="400">Website</FormLabel>
                  <Input type="Text" w="60%" size="sm" borderRadius="6" />
                </FormControl>

                <Center mt={5}>
                  <Button colorScheme="blue" w="15%">
                    Save
                  </Button>
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
              <p>Tables</p>
            </TabPanel>
            <TabPanel>
              <p>Staff</p>
            </TabPanel>
            <TabPanel>
              <p>Extra Charges</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default VenueSettings;
