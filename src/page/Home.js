import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import Table from "../Components/Table";
import axios from "axios";
import Pagination from "@/Components/Pagination";
import DropDown from "@/Components/DropDown";

const Home = () => {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [maxPage, setMaxPage] = useState(10);
  const offset = (page - 1) * limit;
  const total = 100;

  useEffect(() => {
    setIsLoading(true);

    const cancelToken = axios.CancelToken.source();

    axios
      .get(`https://jsonplaceholder.typicode.com/comments?_page=${page}`, {
        cancelToken: cancelToken.token,
      })
      .then(({ data }) => {
        setComments(data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("취소됨");
        } else {
          // handle Errors
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      cancelToken.cancel("취소해!");
    };
  }, [page]);

  useEffect(() => {
    setMaxPage(Math.ceil(100 / limit));
  }, [limit]);

  const handleClick = useCallback((e) => {
    const { target } = e;
    const value = target.innerText;
    if (value === ">>") {
      setPage((cur) => cur + 1);
    } else if (value === "<<") {
      setPage((cur) => cur - 1);
    } else {
      setPage(parseInt(value));
    }
  }, []);

  const handleChange = (e) => {
    setLimit(e.target.value);
    setPage(1)
  };

  // handle Erros

  return (
    <Wrapper>
      <Title>Grepp Enterprise</Title>
      <DropDown limit={limit} handleChange={handleChange} />
      {comments.length > 0 ? (
        isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Table comments={comments} />
        )
      ) : (
        ""
      )}
      <Pagination
        handleClick={handleClick}
        page={page}
        total={total}
        limit={limit}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px 50px;
  background-color: #f2f2f2;
`;

const Title = styled.div`
  margin: 20px 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

export default Home;
