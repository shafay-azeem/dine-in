import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/select";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import { useToast } from "@chakra-ui/react";
import { BsPlus, BsPlusLg } from "react-icons/bs";

const AddModifierModal = (props) => {
  //console.log(props.PriceOption);
  const toast = useToast();
  let ItemSizes = props.PriceOption;
  let Modifiers = props.Modifiers;

  let ItemId = props.ItemId;
  let tableNumber = props.tableNumber;

  // console.log(ItemId, tableNumber, "ItemId , tableNumber");

  const [checked, setChecked] = useState([]);

  const [selectedSize, setSelectedSize] = useState();

  // const myFun = (Name, Price) => {
  // let ModifierData =[ {
  //   Modifier_Name: Name,
  //   Modifier_Price: Price,
  //   Modifier_Qty: 1,
  // }];

  //   setChecked([...checked, ModifierData]);
  // };

  const myFun = async (Name, Price) => {
    try {
      let ModifierData = {
        Modifier_Name: Name,
        Modifier_Price: Price,
        Modifier_Qty: 1,
      };

      //   setChecked([...checked, ModifierData]);

      await apiFunctions
        .POST_REQUEST(
          BASE_URL +
          API_URL.ADD_MODIFIER_ITEM +
          tableNumber +
          `?itemId=${ItemId}&item_Size=${selectedSize}`,
          ModifierData
        )
        .then((res) => {
          if (res.status == 200) {
            toast({
              position: "top",
              title: `Modifier Added SuccessFully`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            // setAdder(Math.random());
            return true;
          } else {
            alert(`There Some Error---`);
            return false;
          }
        });
    } catch (err) {
      console.log(err);
      toast({
        position: "top",
        title: `There Some Error`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Select
              placeholder="Please Select Your Item Size"
              onChange={(e) => setSelectedSize(e.target.value)}
              value={selectedSize}
            >
              {ItemSizes?.map((y, index) => (
                <option value={y.name} key={index}>
                  {y.name} ({y.calories} Calories)
                </option>
              ))}
            </Select>
          </FormControl>

          {Modifiers?.map((s, index) => {
            return (
              <div key={index}>
                {s.reference?.map((r, index) => {
                  return (
                    <div
                      className="d-flex justify-content-between mt-2 py-1 px-2 border-bottom mb-3 mt-4"
                      key={index}
                    >
                      {r.Name === undefined ? null : <div>{r.Name}</div>}

                      {/* {r.Price === undefined ? null : (
                        <div className="itemPrice">${r.Price}</div>
                      )} */}

                      <BsPlusLg
                        className="mt-1"
                        style={{ cursor: "pointer" }}
                        onClick={() => myFun(r.Name, r.Price)}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddModifierModal;
