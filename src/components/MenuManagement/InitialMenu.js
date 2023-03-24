import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import MenuModifieModal from "./MenuModifieModal";
import PromoModal from "./PromoModal";
import PurchaseModal from "./PurchaseModal";
import { useNavigate } from "react-router-dom";
import ModifiersTable from "../Partials/CustomTables/ModifiersTable";
import ConditionalTable from "../Partials/CustomTables/ConditionalTable";
import CustomButton from "../../CustomElements/CustomButton";
import DisplayCard from "../Partials/MenuCards/DisplayCard";
import SettingDrawer from "./SettingDrawer";
import CreateMenuDrawer from "./CreateMenuDrawer";
import LabelModal from "./LabelModal";

const InitialMenu = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: labelIsOpen,
    onOpen: labelOnOpen,
    onClose: labelOnClose,
  } = useDisclosure();
  const {
    isOpen: purchaseIsOpen,
    onOpen: purchaseOnOpen,
    onClose: purchaseOnClose,
  } = useDisclosure();

  const {
    isOpen: modifierIsOpen,
    onOpen: modifierOnOpen,
    onClose: modifierOnClose,
  } = useDisclosure();

  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Menu Management
          </Text>
        </GridItem>
      </Grid>

      <Box m="10">
        <Tabs w="100%">
          <TabList>
            <Tab>Menu</Tab>
            <Tab>Modifiers</Tab>
            <Tab>Label Management</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={4} align="right">
                <GridItem colSpan={12} h="10">
                  <CustomButton
                    click={onOpen}
                    btnText={"create menu"}
                    size={"sm"}
                    mb={2}
                  />
                </GridItem>
                {isOpen ? (
                  <SettingDrawer
                    menuCreate={true}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                  ></SettingDrawer>
                ) : null}
              </Grid>
              <DisplayCard />
            </TabPanel>

            <TabPanel backgroundColor="white" textAlign="right">
              <CustomButton
                click={modifierOnOpen}
                btnText={"Add a Modifiers Group"}
                size={"sm"}
                mb={2}
              />
              {modifierIsOpen ? (
                <MenuModifieModal
                  isOpen={modifierIsOpen}
                  onOpen={modifierOnOpen}
                  onClose={modifierOnClose}
                />
              ) : null}

              <ModifiersTable />
            </TabPanel>

            <TabPanel backgroundColor="white" textAlign="right">
              <CustomButton
                click={labelOnOpen}
                btnText={"Add a Label"}
                size={"sm"}
                mb={2}
              />
              {labelIsOpen ? (
                <LabelModal
                  isOpen={labelIsOpen}
                  onOpen={labelOnOpen}
                  onClose={labelOnClose}
                />
              ) : null}
              <ConditionalTable />
            </TabPanel>

            <TabPanel backgroundColor="white" textAlign="right">
              <CustomButton
                click={purchaseOnOpen}
                btnText={"Add a Promotion"}
                size={"sm"}
                mb={2}
              />

              {purchaseIsOpen ? (
                <PurchaseModal
                  isOpen={purchaseIsOpen}
                  onOpen={purchaseOnOpen}
                  onClose={purchaseOnClose}
                />
              ) : null}

              <ConditionalTable number={2} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default InitialMenu;
