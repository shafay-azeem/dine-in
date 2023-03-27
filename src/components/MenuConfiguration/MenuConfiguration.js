import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import QRCode from "qrcode";
import { createSearchParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MenuConfiguration = () => {
  const toast = useToast();
  const USERID = localStorage.getItem("user_id");
  const resUserName = localStorage.getItem("resUserName");

  const [url, setUrl] = useState();

  const navigate = useNavigate();

  const [qr, setQr] = useState("");
  const [qrVisible, setQrVisible] = useState(false);
  const [selectedQrIndex, setSelectedQrIndex] = useState(null);
  const [tableList, setTableList] = useState();

  useEffect(() => {
    getTablebyUserId();
  }, []);

  async function getTablebyUserId() {
    let getTables = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_TABLES_BY_USERID
    );

    // if (getSection.data.section.length == 0) {
    //   setLoading(true);
    // }

    let res = getTables.data.tables.Table;
    setTableList(res);
    console.log(res);
    // setLoading(true);
  }

  // const myfun = () => {
  //   navigate({
  //     pathname: "/menustart",
  //     search: createSearchParams({
  //       USERID,
  //       tableNumber,
  //     }).toString(),
  //   });
  // };

  const port = window.location.port;

  let DummyData = [
    {
      id: 1,
      tableNumber: "1",
    },
    {
      id: 2,
      tableNumber: "2",
    },
    {
      id: 3,
      tableNumber: "3",
    },
  ];

  useEffect(() => {}, []);

  function GenerateQRCode(index, y) {
    console.log(y, "tn");
    setSelectedQrIndex(index);
    setQrVisible(!qrVisible);
    QRCode.toDataURL(
      `https://lifoapp.co.uk/menustart?resUserName=${resUserName}&TableNumber=${y}`,
      // `http://localhost:${port}/menustart?resUserName=${resUserName}&TableNumber=${y}`
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
          `https://lifoapp.co.uk/menustart?resUserName=${resUserName}&TableNumber=${y}`
        );
      }
    );
  }

  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Dine-in QR Menu Configuration
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
            {/* <TabPanel>
              <Box style={{ width: "90rem" }}>
                <Grid templateColumns="repeat(4, 1fr)" gap={10}>
                  <GridItem colSpan={2} h="10" mb={4}>
                    {tableList?.map((x, index) => {
                      return (
                        <Card key={index}>
                          <Card.Body>
                            <Card.Title>QR Generator</Card.Title>
                            <div>
                              <div className="margin-left:auto">
                                {qrVisible && selectedQrIndex === index && (
                                  <>
                                    <img
                                      src={qr}
                                      style={{
                                        width: "150px",
                                        height: "150px",
                                      }}
                                    />
                                    <a href={qr} download="qrcode.png">
                                      Download
                                    </a>
                                    {url ? (
                                      <Card.Text>
                                        URL : {url ? url : null}
                                      </Card.Text>
                                    ) : null}
                                  </>
                                )}
                              </div>
                            </div>

                            <Button
                              variant="primary"
                              className="mt-2"
                              onClick={() => {
                                GenerateQRCode(index, x.TableNumber);
                              }}
                            >
                              Table {x.TableNumber}
                            </Button>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </GridItem>
                </Grid>
              </Box>
            </TabPanel> */}

            <Container className="mt-4">
              <Row>
                {tableList?.map((x, index) => {
                  return (
                    <Col md={6} className="py-2">
                      {x.TableStatus ? (
                        <Card key={index}>
                          <Card.Body>
                            <Card.Title>QR Generator</Card.Title>
                            <div>
                              <div className="margin-left:auto">
                                {qrVisible && selectedQrIndex === index && (
                                  <>
                                    <img
                                      src={qr}
                                      style={{
                                        width: "150px",
                                        height: "150px",
                                      }}
                                    />
                                    {/* <a href={qr} download="qrcode.png">
                                    Download
                                  </a> */}
                                    {url ? (
                                      <Card.Text>
                                        URL : {url ? url : null}
                                      </Card.Text>
                                    ) : null}
                                  </>
                                )}
                              </div>
                            </div>

                            <div className="d-flex justify-content-start align-items-center">
                              <Button
                                variant="primary"
                                className="mt-2"
                                onClick={() => {
                                  GenerateQRCode(index, x.TableNumber);
                                }}
                              >
                                Table {x.TableNumber}
                              </Button>

                              {qrVisible && selectedQrIndex === index && (
                                <Button variant="primary" className="mt-2 ms-2">
                                  <a href={qr} download="qrcode.png">
                                    Download
                                  </a>
                                </Button>
                              )}
                            </div>
                          </Card.Body>
                        </Card>
                      ) : null}
                    </Col>
                  );
                })}
              </Row>
            </Container>

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

export default MenuConfiguration;
