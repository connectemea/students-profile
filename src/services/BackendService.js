import axios from "axios";
import LOCAL_KEY from "../constants/LOCAL_KEY";
import BACKEND_URL from "../constants/BACKEND_URL";

//get request
const get = async (path, headers = {}, params = {}) => {
  //generating url
  const url = `${BACKEND_URL.BASE_URL}${path}`;

  //generating the request
  const response = await axios.get(url, _generateParams(headers, params));

  return response.data.data;
};

//post request
const post = async (path, data = {}, headers = {}, params = {}) => {
  //generating url
  const url = `${BACKEND_URL.BASE_URL}${path}`;

  //generating the request
  const response = await axios.post(
    url,
    data,
    _generateParams(headers, params)
  );

  return response.data;
};

//patch request
const patch = async (path, data = {}, headers = {}, params = {}) => {
  //generating url
  const url = `${BACKEND_URL.BASE_URL}${path}`;

  //generating the request
  const response = await axios.patch(
    url,
    data,
    _generateParams(headers, params)
  );

  return response.data;
};
 
//delete request
const destroy = async (path, headers = {}, params = {}) => {
  //generating url
  const url = `${BACKEND_URL.BASE_URL}${path}`;

  //generating the request
  const response = await axios.delete(url, _generateParams(headers, params));

  return response.data;
};

// const imageUpload = async (path, data = {}, params = {}) => {
//   axios({
//     //   //generating url
//     // const URL = `${BACKEND_URL.BASE_URL}${path}`;
//     method: "post",
//     url: `${BACKEND_URL.BASE_URL}${path}`,
//     data: data,
//     headers: { "Content-Type": "multipart/form-data" }
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
// };

//generate header parmas for request
const _generateParams = (headers = {}, params = {}) => {
  //get token from the local storage
  const authToken = localStorage.getItem(LOCAL_KEY.AUTH_TOKEN);

  //set headers
  const localHeader = {
    token: authToken,
    ...headers,
  };
  //return params and headers
  return {
    headers: localHeader,
    params,
  };
};

//export the functions
const BackendService = {
  get,
  post,
  patch,
  destroy,
  // imageUpload
};

export default BackendService;
