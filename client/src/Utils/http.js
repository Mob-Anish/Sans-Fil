import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-type": "application/json",
  },
});

const post = (url, { params = {}, body = {} } = {}) => {
  return instance({
    url,
    params,
    data: body,
    method: "post",
  })
    .then((response) => response);
};

const http = {
  instance,
  post,
};

export default http;
