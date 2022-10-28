import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import {
  Avatar,
  DrawerFooter,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Tooltip } from "@chakra-ui/tooltip";
import {
  BellIcon,
  ChevronDownIcon,
  HamburgerIcon,
  InfoIcon,
  QuestionOutlineIcon,
  SettingsIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  DrawerCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Reports from "../Reports/Reports";
import { useHistory } from "react-router-dom";

const SideDrawer = () => {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  const reports = () => {
    history.push("/reports");
  };

  const orders = () => {
    history.push("/order");
  };

  const customers = () => {
    history.push("/customer");
  };

  const menu = () => {
    history.push("/menu");
  };

  const feedbacks = () => {
    history.push("/feedbacks");
  };

  const translationcenter = () => {
    history.push("/translationcenter");
  };

  const {
    isOpen: isOpenDashboardModel,
    onOpen: onOpenDashboardModel,
    onClose: onCloseDashboardModel,
  } = useDisclosure();
  const {
    isOpen: isOpenNotificationModel,
    onOpen: onOpenNotificationModel,
    onClose: onCloseNotificationModel,
  } = useDisclosure();
  const {
    isOpen: isOpenInfoModel,
    onOpen: onOpenInfoModel,
    onClose: onCloseInfoModel,
  } = useDisclosure();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Menu" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpenDashboardModel}>
            <HamburgerIcon fontSize="20px" m={2} />
            <Text display={{ base: "none", md: "flex" }} px={4}>
              Dashboard
            </Text>
          </Button>
        </Tooltip>

        <div>
          <Menu>
            <MenuButton>
              <QuestionOutlineIcon fontSize="20px" m={2} />
              <MenuList>
                <MenuItem icon={<SettingsIcon />}>Support Center</MenuItem>
                <MenuItem icon={<BellIcon />}>Live Chat</MenuItem>
              </MenuList>
            </MenuButton>
          </Menu>
          <Menu>
            <Tooltip label="Notifications" hasArrow placement="bottom-end">
              <MenuButton onClick={onOpenNotificationModel}>
                <BellIcon fontSize="20px" m={2} />
              </MenuButton>
            </Tooltip>
          </Menu>

          <Menu>
            <MenuButton onClick={onOpenInfoModel}>
              <InfoIcon fontSize="20px" m={2} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<SettingsIcon />}>Account Setting</MenuItem>
              <MenuItem icon={<BellIcon />}>Notifications</MenuItem>
              <MenuItem icon={<QuestionOutlineIcon />}>Help Center</MenuItem>
              <MenuItem icon={<i className="fas fa-bars"></i>}>
                Change Sound
              </MenuItem>
              <MenuItem icon={<i className="fas fa-language"></i>}>
                Change Language
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<UnlockIcon />}>Sign Out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer
        placement="left"
        onClose={onCloseDashboardModel}
        isOpen={isOpenDashboardModel}
      >
        <DrawerOverlay></DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontSize="16px">
            Your Resturant Name
          </DrawerHeader>
          <DrawerBody>
            <Stack direction="column" spacing={1} align="start">
              <Button variant="link" onClick={home}>
                <HamburgerIcon fontSize="20px" m={2} />
                Dashboard
              </Button>
              <Button variant="link" onClick={reports}>
                <HamburgerIcon fontSize="20px" m={2} />
                Reports
              </Button>
              <Button variant="link" onClick={orders}>
                <HamburgerIcon fontSize="20px" m={2} />
                Orders
              </Button>
              <Button variant="link" onClick={customers}>
                <HamburgerIcon fontSize="20px" m={2} />
                Customers
              </Button>
              <Button variant="link" onClick={menu}>
                <HamburgerIcon fontSize="20px" m={2} />
                Menu Management
              </Button>
              <Button variant="link" onClick={feedbacks}>
                <HamburgerIcon fontSize="20px" m={2} />
                Feedbacks
              </Button>
              <Button variant="link" onClick={translationcenter}>
                <HamburgerIcon fontSize="20px" m={2} />
                Translation Center
              </Button>
              <Button variant="link">
                <HamburgerIcon fontSize="20px" m={2} />
                Venue Settings
              </Button>
              <Button variant="link">
                <HamburgerIcon fontSize="20px" m={2} />
                Integrations
              </Button>

              <DrawerHeader borderBottomWidth="1px" fontSize="16px" mb={2}>
                App Configurations
              </DrawerHeader>
              <Button variant="link">
                <HamburgerIcon fontSize="20px" m={2} />
                Dine-In-OR Menu
              </Button>
              <Button variant="link">
                <HamburgerIcon fontSize="20px" m={2} />
                Delivery / Pick Up
              </Button>
              <Button variant="link">
                <HamburgerIcon fontSize="20px" m={2} />
                Tablet Menu
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Notifications */}

      <Drawer
        placement="right"
        onClose={onCloseNotificationModel}
        isOpen={isOpenNotificationModel}
        size={"md"}
      >
        <DrawerOverlay></DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontSize="16px">
            Notifications
          </DrawerHeader>
          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab>Orders</Tab>
                <Tab>Feedbacks</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>Orders</p>
                </TabPanel>
                <TabPanel>
                  <p>Feedbacks</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Info */}

      <Drawer
        isOpen={isOpenInfoModel}
        placement="right"
        onClose={onCloseInfoModel}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>What New In Your Menu</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
