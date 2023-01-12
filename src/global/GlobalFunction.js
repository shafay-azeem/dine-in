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
};
export default apiFunctions;
