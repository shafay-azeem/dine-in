import axios from "axios";

const apiFunctions = {
  GET_REQUEST: async function (url) {
    const token = localStorage.getItem('token');
    let config = null;
    if (token !== null && token !== undefined) {
      config = {
        headers: {
          "Content-type": "application/json",
          // "Content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      };
    }

    const data = await axios
      .get(url, config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });

    return data;
  },

  GET_REQUEST_BY_ID: async function (url) {
    const token = localStorage.getItem('token');
    let config = null;
    if (token !== null && token !== undefined) {
      config = {
        headers: {
          "Content-type": "application/json",
          // "Content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      };
    }
    const data = await axios
      .get(url, config)
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

    const token = localStorage.getItem('token');
    let config = null;
    if (token !== null && token !== undefined) {
      config = {
        headers: {
          "Content-type": "application/json",
          // "Content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      };
    }

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
    const token = localStorage.getItem('token');
    let config = null;
    if (token !== null && token !== undefined) {
      config = {
        headers: {
          "Content-type": "application/json",
          // "Content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      };
    }
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
    const token = localStorage.getItem('token');
    let config = null;
    if (token !== null && token !== undefined) {
      config = {
        headers: {
          "Content-type": "application/json",
          // "Content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      };
    }
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
