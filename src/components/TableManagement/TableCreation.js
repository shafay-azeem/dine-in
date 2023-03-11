import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";

const TableCreation = () => {
  const [number, setNumber] = useState();
  const toast = useToast();

  useEffect(() => {
    getTableCountbyUserId();
  }, []);

  const createTable = async () => {
    try {
      let data = {
        tablesCount: number,
      };

      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.CREATE_TABLES, data)
        .then((res) => {
          if (res.status == 201) {
            console.log(res.data, "response");

            toast({
              position: "top",
              title: `Table Created SuccessFully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            return true;
          } else {
            alert(`There Some Error`);
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

  async function getTableCountbyUserId() {
    let getTableCountbyUserId = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_TABLE_COUNT_BY_USERID
    );

    let res = getTableCountbyUserId.data.tables;
    // console.log(res, "res");
    setNumber(res);

    return;
  }

  return (
    <div>
      <FormControl style={{ width: "20rem" }}>
        <FormLabel>Enter Number</FormLabel>
        <Input
          placeholder="enter number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={() => createTable()}>
        Created
      </Button>
    </div>
  );
};

export default TableCreation;
