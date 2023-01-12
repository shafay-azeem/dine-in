import axios from "axios";

const apiFunctions = {
  GET_REQUEST: async function (url) {
    const data = await axios
      .get(url)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });

    return data;
  },

  GET_REQUEST_BY_ID: async function (url) {
    const data = await axios
      .get(url)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error)
        return error;
      });

    return data;
  },

  POST_REQUEST: async function (url, formData) {
    console.log(url);
    console.log(formData);
    let config = {
      headers: {
        "Content-type": "application/json",

      },
    };

    const data = await axios
      .post(url, formData, config)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });

    console.log(data);
    return data;
  },

  DELETE_REQUEST: async function (url) {
    let config = {
      headers: {
        "Content-type": "application/json",

      },
    };
    const data = await axios
      .delete(url, config)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });

    console.log(data);
    return data;
  },

  PUT_REQUEST: async function (url, formData) {

    let config = {
      headers: {
        "Content-type": "application/json",

      },
    };
    const data = await axios
      .put(url, formData, config)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });

    console.log(data);
    return data;
  },
};
export default apiFunctions;
