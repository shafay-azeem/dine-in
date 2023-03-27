import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";
import QRCode from "qrcode";
import { Col, Container, Row } from "react-bootstrap";

const MenuConfigurationCopy = () => {
  const USERID = localStorage.getItem("user_id");
  const resUserName = localStorage.getItem("resUserName");

  const [inputList, setInputList] = useState([]);

  const [url, setUrl] = useState();
  const [qr, setQr] = useState("");
  const navigate = useNavigate();
  const [tableNumber, setTableNumber] = useState();

  const myfun = () => {
    navigate({
      pathname: "/menustart",
      search: createSearchParams({
        USERID,
        tableNumber,
      }).toString(),
    });
  };
  const port = window.location.port;

  function generateRandomNumber() {
    let randomNumber = "";
    const characters = "123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      randomNumber += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }

    return randomNumber;
  }

  useEffect(() => {
    setTableNumber(generateRandomNumber());
  }, []);

  const GenerateQRCode = () => {
    setTableNumber(generateRandomNumber());

    QRCode.toDataURL(
      `https://lifoapp.co.uk/menustart?resUserName=${resUserName}&menu=${true}`,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        setQr(url);

        setUrl(
          `https://lifoapp.co.uk/menustart?resUserName=${resUserName}&menu=${"true"}`
        );
      }
    );
  };
  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Delivery & Pick Up Menu Configuration
          </Text>
        </GridItem>
      </Grid>

      <Box m="10">
        <Tabs w="100%">
          <TabList>
            <Tab>QR Settings</Tab>
            {/* <Tab>Display Options</Tab>
          <Tab>Design</Tab>
          <Tab>Service Options</Tab>
          <Tab>Feedback Settings</Tab>
          <Tab>Ordering Settings</Tab> */}
          </TabList>

          <TabPanels>
            <TabPanel>
              <Container className="m-4">
                <Row>
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <Nav.Link>Your Restaurant Menu</Nav.Link>
                        <Card.Title>QR Generator</Card.Title>

                        <Card.Text>
                          <text>{url ? url : null}</text>

                          <div className="margin-left:auto">
                            {qr && (
                              <>
                                <img
                                  src={qr}
                                  style={{
                                    width: "200px",
                                    height: "200px",
                                  }}
                                />
                                <a href={qr} download="qrcode.png">
                                  Download
                                </a>
                              </>
                            )}
                          </div>
                          <Button
                            onClick={GenerateQRCode}
                            variant="primary"
                            className="mt-2 ms-2"
                          >
                            Generate
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </TabPanel>
            {/* <TabPanel>
            <p>Display Options</p>
          </TabPanel> */}
            {/* <TabPanel>
            <p>Design</p>
          </TabPanel> */}
            {/* <TabPanel>
            <Box bg="white" w="50%" p={4} borderRadius="10">
              <Box w="70%" m={4}>
                <Text fontSize="17px" fontWeight="500">
                  Service Options
                </Text>

                <HStack>
                  <p>
                    You can add service request options below (e.g. Request
                    checkout, wrong order). If you don’t add any options, your
                    customers will send requests directly.
                  </p>
                  <Switch />
                </HStack>

                {inputList}

                <Button colorScheme="blue" mt={4} onClick={onAddBtnClick}>
                  Add
                </Button>
              </Box>
            </Box>
          </TabPanel> */}
            {/* <TabPanel>
            <p>Feedback Settings</p>
          </TabPanel> */}
            {/* <TabPanel>
            <p>Ordering Settings</p>
          </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default MenuConfigurationCopy;
