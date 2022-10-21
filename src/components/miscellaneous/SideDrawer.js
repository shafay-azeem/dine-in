import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Avatar, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import { AddIcon, BellIcon, ChevronDownIcon, QuestionOutlineIcon, SettingsIcon } from "@chakra-ui/icons";


const SideDrawer = () => {
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
                    <Button variant="ghost">
                        <i className="fas fa-bars"></i>
                        <Text display={{ base: "none", md: "flex" }} px={4}>
                            Dashboard
                        </Text>
                    </Button>
                </Tooltip>

                <div>
                    <Menu>
                        <MenuButton>
                            <BellIcon fontSize="20px" m={1} />
                        </MenuButton>
                        <MenuButton>
                            <QuestionOutlineIcon fontSize="20px" m={1} />
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
                            <MenuItem icon={<AddIcon />}>Sign Out</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Box>
        </>
    )
}

export default SideDrawer
