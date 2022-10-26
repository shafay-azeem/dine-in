import React from 'react'
import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const InitialMenu = () => {
    return <>

        <Grid>
            <GridItem w="100%" bg="white" height="120%">
                <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
                    Menu Management
                </Text>
            </GridItem>
        </Grid>
        <Box ml="10" mt={5}>
            <Tabs>
                <TabList>
                    <Tab>Menu</Tab>
                    <Tab>Modifiers</Tab>
                    <Tab>Promo Codes</Tab>
                    <Tab>In-app purchases</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel backgroundColor="white">

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

    </>
}

export default InitialMenu
