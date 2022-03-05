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

const http = {
  instance,
  get,
  post,
  patch,
};

export default http;
