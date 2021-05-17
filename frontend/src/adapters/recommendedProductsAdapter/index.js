import baseURL from "../index";
import axios from "axios";

const getRecommendedProducts = () => {
  const promise = axios.get(`${baseURL}/products?_limit=6`);
  const dataPromise = promise.then((response) => response.data);

  return dataPromise;
};

export default getRecommendedProducts;
