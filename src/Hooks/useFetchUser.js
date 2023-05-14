import axios from "axios";
import { useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/comments?_page=";
const client = axios.create({ baseURL });
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const useFetchUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchUser = (page) => {
    setIsLoading(true);
    return client
      .get(page, { cancelToken: source.token })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        if (client.isCancel(err)) {
          console.log(`Request canceled ${err}`);
          setIsError(`Request canceled ${err}`);
        }
        console.log(err);
        setIsError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return [isLoading, isError, fetchUser];
};

export default useFetchUser;
