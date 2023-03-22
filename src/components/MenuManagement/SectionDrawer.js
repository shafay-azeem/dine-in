import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Textarea,
  Switch,
  Checkbox,
  Select,
  RadioGroup,
  Stack,
  Radio,
  Alert,
  Box,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Center,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { useState, useRef } from "react";
import { MenuState } from "../../context/MenuContext";
import { MultiSelect } from "react-multi-select-component";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import ImagePreviewModal from "./ImagePreviewModal";
import { BsFillTrashFill } from "react-icons/bs";
import { useEffect } from "react";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useToast } from "@chakra-ui/react";
import Spinner from "react-bootstrap/Spinner";


const SectionDrawer = (props) => {
  let menu_index = props.menu_index;

  let sectionId = props?.section_index;
  let subSecId = props?.subsection_index;
  let section_Or_subSection = props?.fromSection;
  // console.log(section_Or_subSection);

  const toast = useToast();

  const {
    subSectionList,
    setSubSectionList,
    sectionList,
    setSectionList,
    setUpdatedSection,
    UpdatedSection,
    setSectionCreated,
    sectionCreated,
    setCreateSubSection,
    createSubSection,
    setUpdatedSubSection,
    updatedSubSection,
    setChanger,
  } = MenuState();

  const [checkedItems, setCheckedItems] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = React.useState("1");
  const [valuetrue, setValueTrue] = React.useState();

  const inputElement = useRef();

  const [name, setName] = useState();

  const [title, setTitle] = useState();

  const [description, setDescription] = useState();
  const [note, setNote] = useState();
  // const [food, setFood] = useState(["New", "Signature"]);
  const [checked, setChecked] = useState();
  const [image, setImage] = useState();
  const [blobImage, setBlobImage] = useState();

  const [select, setSelect] = useState();
  const [conversion, setConversion] = useState([]);

  let initialArrayFaizy = [...sectionList];
  let initalArrayShafay = sectionList;
  initialArrayFaizy?.splice(props?.new_index, 1);


  const initalArrayDecider = props?.section_index
    ? initialArrayFaizy
    : initalArrayShafay;
  const [arrayDecider, setArrayDecider] = useState(initalArrayDecider);

  const [pass, setPass] = useState(false);
  const [close, setClose] = useState();

  const [alphabetical, setalphabetical] = useState(false);

  const [val, setVal] = useState();

  const [mId, setMId] = useState(menu_index);

  const [sectionLabel, setSectionLabel] = useState([])

  const handleOnchange = async (val) => {
    console.log(val)
    // setSectionLabel(val)
  }

  const {
    isOpen: ModalOpen,
    onOpen: ModalOnOpen,
    onClose: ModalOnClose,
  } = useDisclosure();


  const options = [
    { label: 'New', value: 'New' },
    { label: 'Signature', value: 'Signature' },
  ]

  const pictureCapture = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "dineInApp");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkq6jers7/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await res.json();
      setImage(data.url.toString());
    } catch (err) {
      console.log(err);
    }
  };

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }




  async function getAllSectionByMenuId() {
    let getSection = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_SECTION_BY_MENU_ID + menu_index
    );

    let res = getSection.data.section;
    setSectionList(res);
  }

  let sectionData = {
    sectionName: name,
    sectionDescription: description,
    sectionNote: note,
    sectionLabel: sectionLabel,
    sectionImage: image,
    sectionStatus: checked,
  };

  const [modalShow, setModalShow] = useState(false);

  const testfunc = async () => {
    if (!name) {
      //alert("Please Enter All Fields");
      toast({
        position: "top",
        title: `Section Name Cant be Empty`,
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    if (checkedItems && val) {
      try {
        const postRes = await apiFunctions.POST_REQUEST(
          BASE_URL + API_URL.CREATE_SUBSECTION + val,
          sectionData
        );
        if (postRes.data.success == true) {
          toast({
            position: "top",
            title: `Sub Section Created Successfully`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setCreateSubSection(true);
        } else {
          throw new Error("Error creating sub-section");
        }
      } catch (err) {
        toast({
          position: "top",
          title: `There Some Error`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        return false;
      }
    } else {
      try {
        const putRes = await apiFunctions.POST_REQUEST(
          BASE_URL + API_URL.CREATE_SECTION + menu_index,
          sectionData
        );
        if (putRes.data.success == true) {
          toast({
            position: "top",
            title: `Section Created Successfully`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setSectionCreated(true);
          setChanger(Math.random());
          return true;
        } else {
          throw new Error("Error creating section");
        }
      } catch (err) {
        toast({
          position: "top",
          title: `There Some Error`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        return false;
      }
    }
  };

  useEffect(() => {
    if (section_Or_subSection === "section" && sectionId) {
      getSingleSectionById();
    } else if (section_Or_subSection === "subSection" && subSecId) {
      getSingleSubSectionById();
    } else {
    }
  }, [menu_index]);

  async function getSingleSubSectionById() {
    setLoading(false);
    let getSingleSection = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.Get_SUBSECTION_BY_ID + subSecId
    );

    if (getSingleSection.data.subSection.length == 0) {
      setLoading(true);
    }

    let setRes = getSingleSection.data.subSection;
    let propertyNames;

    setName(setRes.sectionName);
    setTitle(setRes.sectionName);

    setDescription(setRes.sectionDescription);
    setNote(setRes.sectionNote);
    setChecked(setRes.sectionStatus);
    setImage(setRes.sectionImage);
    setSectionLabel(setRes.sectionLabel);

    setLoading(true);
  }

  async function getSingleSectionById() {
    setLoading(false);
    let getSingleSection = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.GET_SINGLE_SECTION_BY_ID + sectionId
    );

    if (getSingleSection.data.section.length == 0) {
      return setLoading(true);
    }

    let setRes = getSingleSection.data.section;

    let propertyNames;

    setName(setRes.sectionName);

    setTitle(setRes.sectionName);

    setDescription(setRes.sectionDescription);
    setNote(setRes.sectionNote);
    setChecked(setRes.sectionStatus);
    setImage(setRes.sectionImage);
    setSectionLabel(setRes.sectionLabel);
    setLoading(true);
  }

  const updatedSection = async (secid, subsecid) => {
    if (checkedItems && val) {
      try {
        const postRes = await apiFunctions.POST_REQUEST(
          BASE_URL + API_URL.CREATE_SUBSECTION + val,
          sectionData
        );
        if (postRes.data.success == true) {
          //alert(`SUB SECTION CREATED SUCCESSFULLY`);
          toast({
            position: "top",
            title: `Sub Section Created SuccessFully`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setCreateSubSection(true);
          // setSubSectionList(postRes);
          const deleteRes = await apiFunctions.DELETE_REQUEST(
            BASE_URL + API_URL.DELETE_SECTION_BY_ID + secid
          );
          if (deleteRes.data.success == true) {
            toast({
              position: "top",
              title: `${deleteRes.data.message}`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            return true;
          } else {
            throw new Error("Error deleting section");
          }
        } else {
          throw new Error("Error creating sub-section");
        }
      } catch (err) {
        alert(`There Some Error: ${err.message}`);
        return false;
      }
    } else if (subsecid && section_Or_subSection === "subSection") {
      try {
        const putRes = await apiFunctions.PUT_REQUEST(
          BASE_URL + API_URL.UPDATE_SUBSECTION_BY_ID + subsecid,
          sectionData
        );
        if (putRes.data.success == true) {
          toast({
            position: "top",
            title: `Subsection Updated Successfully`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setUpdatedSubSection(true);
          return true;
        } else {
          throw new Error("Error updating section");
        }
      } catch (err) {
        toast({
          position: "top",
          title: `There Some Error`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        return false;
      }
    } else {
      try {
        const putRes = await apiFunctions.PUT_REQUEST(
          BASE_URL + API_URL.UPDATE_SECTION_BY_ID + secid,
          sectionData
        );
        if (putRes.data.success == true) {
          //alert(`Section Updated Successfully`);
          toast({
            position: "top",
            title: `Section Updated Successfully`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setUpdatedSection(true);
          return true;
        } else {
          throw new Error("Error updating section");
        }
      } catch (err) {
        //alert(`There Some Error: ${err.message}`);
        toast({
          position: "top",
          title: `There Some Error`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        return false;
      }
    }
  };




  const handleAlphabetically = (event) => { };

  function deleteimg() {
    setImage(null);
    document.getElementById("img").value = "";
  }

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {props?.section_index || props?.subsection_index ? (
            <DrawerHeader>{title}</DrawerHeader>
          ) : (
            <DrawerHeader>Add New Section</DrawerHeader>
          )}

          {loading ? (
            <DrawerBody>
              <Tabs>
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Detail</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <FormControl>
                      <FormLabel fontWeight="400">Name</FormLabel>
                      <Input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        type="text"
                        onChange={(e) => setMId(e.target.value)}
                        value={mId}
                        hidden
                      />
                    </FormControl>

                    <FormControl mt={3}>
                      <FormLabel fontWeight="400">Description</FormLabel>
                      <Textarea
                        placeholder="Here is a sample placeholder"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      />
                    </FormControl>

                    <FormControl mt={3}>
                      <FormLabel fontWeight="400">Note</FormLabel>
                      <Input
                        type="text"
                        onChange={(e) => setNote(e.target.value)}
                        value={note}
                      />
                    </FormControl>

                    <FormControl mt={3}>
                      <FormLabel fontWeight="400">Upload Your Image</FormLabel>
                      <Input
                        size="sm"
                        type="file"
                        accept=".jpg,.png"
                        onChange={pictureCapture}
                        id="img"
                      />
                      {image && (
                        <div>
                          <img
                            className="preview mt-4 mx-auto"
                            src={image}
                            alt=""
                            width="200px"
                            height="200px"
                            onClick={ModalOnOpen}
                          />

                          <IconButton
                            onClick={deleteimg}
                            variant="outline"
                            colorScheme="teal"
                            icon={<BsFillTrashFill />}
                          />
                        </div>
                      )}
                      <Modal isOpen={ModalOpen} onClose={ModalOnClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton />

                          <ModalBody>
                            <Center>
                              <div>
                                <img
                                  className="preview p-5"
                                  src={image}
                                  alt=""
                                />
                              </div>
                            </Center>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </FormControl>


                    <label>
                      <input
                        type="checkbox"
                        checked={checked ? checked : false}
                        onChange={(e) => setChecked(e.target.checked)}
                        style={{ marginRight: "5px", marginTop: "20px" }}
                      />
                      Display The Section
                    </label>



                    {arrayDecider.length > 0 &&
                      props?.subsection_index == undefined ? (
                      <FormControl>
                        <label>
                          <input
                            type="checkbox"
                            checked={checkedItems}
                            onChange={(e) => setCheckedItems(e.target.checked)}
                            style={{
                              marginRight: "5px",
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                          />
                          Use as a sub-section
                        </label>

                        {checkedItems ? (
                          <Select
                            placeholder="Select option"
                            onChange={(e) => setVal(e.target.value)}
                          >
                            {arrayDecider?.map((x, index) => {
                              return (
                                <option value={x._id} key={index}>
                                  {x.sectionName}{" "}
                                </option>
                              );
                            })}
                          </Select>
                        ) : (
                          <Select placeholder="Select option">
                            {arrayDecider?.map((x, index) => {
                              return (
                                <option value={x._id} key={index}>
                                  {x.sectionName}
                                </option>
                              );
                            })}
                          </Select>
                        )}
                      </FormControl>
                    ) : null}

                  </TabPanel>
                  <TabPanel>
                    <FormControl>
                      <FormLabel fontWeight="400">Labels</FormLabel>
                      <MultiSelect
                        onChange={setSectionLabel}
                        options={options}
                        value={sectionLabel}
                        labelledBy="Select"
                      />
                    </FormControl>


                  </TabPanel>
                </TabPanels>
              </Tabs>
            </DrawerBody>
          ) : (
            <div className="loading-screen">
              <div className="loading-spinner"> </div>
            </div>
          )}
          {loading ? (
            <DrawerFooter>

              <Button variant="outline" mr={3} onClick={props.onClose}>
                Cancel
              </Button>

              {props?.section_index || props?.subsection_index ? (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    updatedSection(sectionId, subSecId);
                  }}
                >
                  Update
                </Button>
              ) : (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    testfunc();
                  }}
                >
                  Save
                </Button>
              )}
            </DrawerFooter>
          ) : (
            <div className="loading-screen">
              <div className="loading-spinner"> </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SectionDrawer;
