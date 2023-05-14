import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/comments?_page=";
const client = axios.create({ baseURL });

const fetchUser = (page) => {
  client
    .get(page)
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
