import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Avatar, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Tooltip } from "@chakra-ui/tooltip";
import { AddIcon, BellIcon, ChevronDownIcon, HamburgerIcon, InfoIcon, QuestionOutlineIcon, SettingsIcon, UnlockIcon } from "@chakra-ui/icons";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Stack
} from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'


const SideDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bg="white"
                w="100%"
                p="5px 10px 5px 10px"
                borderWidth="5px">
                <Tooltip label="Menu" hasArrow placement="bottom-end">
                    <Button variant="ghost" onClick={onOpen}>
                        <HamburgerIcon fontSize="20px" m={2} />
                        <Text display={{ base: "none", md: "flex" }} px={4}>
                            Dashboard
                        </Text>
                    </Button>
                </Tooltip>

                <div>
                    <Menu>
                        <MenuButton>
                            <BellIcon fontSize="20px" m={2} />
                        </MenuButton>
                        <MenuButton>
                            <QuestionOutlineIcon fontSize="20px" m={2} />
                        </MenuButton>
                        <MenuButton>
                            <InfoIcon fontSize="20px" m={2} />
                        </MenuButton>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
                            <Avatar
                                size="sm"
                                cursor="pointer"
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={<SettingsIcon />}>Account Setting</MenuItem>
                            <MenuItem icon={<BellIcon />}>Notifications</MenuItem>
                            <MenuItem icon={<QuestionOutlineIcon />}>Help Center</MenuItem>
                            <MenuItem icon={<i className="fas fa-bars"></i>}>Change Sound</MenuItem>
                            <MenuItem icon={<i className="fas fa-language"></i>}>Change Language</MenuItem>
                            <MenuDivider />
                            <MenuItem icon={<UnlockIcon />}>Sign Out</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Box>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay></DrawerOverlay>
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px" fontSize="16px">Your Resturant Name</DrawerHeader>
                    <DrawerBody>
                        <Stack direction='column' spacing={1} align='start'>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Dashboard
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Reports
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Orders
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Customers
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Menu Management
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Feedbacks
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Translation Center
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Venue Settings
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Integrations
                            </Button>

                            <DrawerHeader borderBottomWidth="1px" fontSize="16px" mb={2}>App Configurations</DrawerHeader>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Dine-In-OR Menu
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Delivery / Pick Up
                            </Button>
                            <Button variant='link'>
                                <HamburgerIcon fontSize="20px" m={2} />
                                Tablet Menu
                            </Button>
                        </Stack>
                    </DrawerBody>

                </DrawerContent>


            </Drawer>
        </>
    )
}

export default SideDrawer
