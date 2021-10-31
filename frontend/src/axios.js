import axios from "axios";

//'https://
const instance = axios.create({
  baseURL: "https://localhost:5001/clone-f6aa7/us-central1/api",
  // api (cloud function) URL
  // use firebase deploy  --only functions
  // baseURL: 'https://us-central1-clone-f6aa7/eu-central1/api'
});

export default instance;
