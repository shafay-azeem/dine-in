import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Avatar, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Tooltip } from "@chakra-ui/tooltip";
import { AddIcon, BellIcon, ChevronDownIcon, HamburgerIcon, InfoIcon, QuestionOutlineIcon, SettingsIcon, UnlockIcon } from "@chakra-ui/icons";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
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
                        <p><Link>Dashboard</Link></p>
                        <p><Link>Reports</Link></p>
                        <p><Link>Orders</Link></p>
                        <p><Link>Customers</Link></p>
                        <p><Link>Menu Management</Link></p>
                        <p><Link>Feedbacks</Link></p>
                        <p><Link>Translation Center</Link></p>
                        <p><Link>Venue Settings</Link></p>
                        <p><Link>Integrations</Link></p>

                        <DrawerHeader borderBottomWidth="1px" fontSize="16px" mb={2}>App Configurations</DrawerHeader>
                        <p><Link>Dine-In-OR Menu</Link></p>
                        <p><Link>Delivery / Pick Up</Link></p>
                        <p><Link>Tablet Menu</Link></p>

                    </DrawerBody>

                </DrawerContent>


            </Drawer>
        </>
    )
}

export default SideDrawer
