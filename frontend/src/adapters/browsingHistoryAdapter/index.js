import baseURL from "../index";
import axios from "axios";

const getBrowsingHistory = () => {
  const promise = axios.get(
    `${baseURL}/browsing-histories?users_permissions_user.id=1`
  );
  const dataPromise = promise.then((response) => response.data);

  return dataPromise;
};

export default getBrowsingHistory;
