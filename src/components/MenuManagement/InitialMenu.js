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

const InitialMenu = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: promoIsOpen,
    onOpen: promoOnOpen,
    onClose: promoOnClose,
  } = useDisclosure();
  const {
    isOpen: purchaseIsOpen,
    onOpen: purchaseOnOpen,
    onClose: purchaseOnClose,
  } = useDisclosure();

  const {
    isOpen: menuIsOpen,
    onOpen: menuOnOpen,
    onClose: menuOnClose,
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
            <Tab>Promo Codes</Tab>
            <Tab>In-app purchases</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={4} align="right">
                <GridItem colSpan={12} h="10">
                  <CustomButton
                    click={menuOnOpen}
                    btnText={"create menu"}
                    size={"sm"}
                    mb={2}
                  />
                </GridItem>
                {menuIsOpen ? (
                  <SettingDrawer
                    isOpen={menuIsOpen}
                    onOpen={menuOnOpen}
                    onClose={menuOnClose}
                  ></SettingDrawer>
                ) : (
                  console.log("sss")
                )}
              </Grid>
              <DisplayCard />
            </TabPanel>
            <TabPanel backgroundColor="white" textAlign="right">
              <CustomButton
                click={onOpen}
                btnText={"Add a Modifiers Group"}
                size={"sm"}
                mb={2}
              />
              {isOpen ? (
                <MenuModifieModal
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              ) : (
                console.log("ss")
              )}

              <ModifiersTable />
            </TabPanel>

            <TabPanel backgroundColor="white" textAlign="right">
              <CustomButton
                click={promoOnOpen}
                btnText={"Add a Promo Code"}
                size={"sm"}
                mb={2}
              />
              {promoIsOpen ? (
                <PromoModal
                  isOpen={promoIsOpen}
                  onOpen={promoOnOpen}
                  onClose={promoOnClose}
                />
              ) : (
                console.log("ss")
              )}
              <ConditionalTable number={1} />
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
              ) : (
                console.log("ss")
              )}

              <ConditionalTable number={2} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default InitialMenu;
