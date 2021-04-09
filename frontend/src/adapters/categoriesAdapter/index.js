import baseURL from "../index";
import axios from "axios";

const getCategories = () => {
  const promise = axios.get(`${baseURL}/sub-cards`);
  const dataPromise = promise.then((response) => response.data);

  return dataPromise;
};
export default getCategories;
