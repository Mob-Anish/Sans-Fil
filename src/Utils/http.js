import axios from "axios";
import config from "../config";
import * as tokenService from "../Services/token";

const instance = axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-type": "application/json",
  },
});

const get = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "get",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
};

const post = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};

  console.log(body);

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "post",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
};

// const schedule = (url, { params = {}, body = {}, headers = {} } = {}) => {
//   const authHeaders = {};
//   console.log(url);

//   // if (accessToken) {
//   //   authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
//   // }

//   console.log(body);

//   return instanceSchedule({
//     url,
//     params,
//     data: body,
//     method: "POST",
//     headers: { ...authHeaders, ...headers },
//   }).then((response) => response);

//   // const data = fetch(
//   //   "https://acsolutionmep.com/project/details_insert.php",
//   //   {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       "Access-Control-Allow-Origin": "*",
//   //     },
//   //   },
//   //   {   
//   //     body: JSON.stringify(body),
//   //   }
//   // ).then((response) => response.json());

//   // console.log(data);

//   // return data;
// };

const patch = (
  url,
  { params = {}, accessToken = false, body = {}, headers = {} } = {}
) => {
  const authHeaders = {};

  console.log(accessToken);

  if (accessToken) {
    console.log("token set");
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "patch",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
};

const put = (
  url,
  { params = {}, accessToken = false, body = {}, headers = {} } = {}
) => {
  const authHeaders = {};

  console.log(body);

  console.log(accessToken);

  if (accessToken) {
    console.log("token set");
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  return instance({
    url,
    params,
    data: body,
    method: "put",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
};

const remove = (
  url,
  { params = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  return instance({
    url,
    params,
    method: "delete",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
};

const http = {
  instance,
  get,
  post,
  patch,
  put,
  remove,
};

export default http;
