import axios from "axios";
const {VITE_SERVER_URL} = import.meta.env;

export const instance = axios.create({
  baseURL:VITE_SERVER_URL,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
