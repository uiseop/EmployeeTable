import axios from "axios";
import { useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/comments?_page=";
const client = axios.create({ baseURL });
const cancelToken = axios.CancelToken.source();

const useFetchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchUser = (page) => {
    setIsLoading(true);
    return client
      .get(page, { cancelToken: cancelToken.token })
      .then(({ data }) => {
        console.log(data, " hag");
        return data;
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log(`Request canceled ${err}`);
          return;
        }
        console.log(err);
        setIsError(err);
      })
      .finally(() => {
        console.log("Im running!!");
        setIsLoading(false);
      });
  };

  return [isLoading, isError, fetchUser, cancelToken];
};

export default useFetchUser;
