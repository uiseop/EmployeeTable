import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/comments?_page=";
const client = axios;

const fetchUser = (page) => {
  client
    .get(`${BASE_URL}${page}`)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export default fetchUser;
