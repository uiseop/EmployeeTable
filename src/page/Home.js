import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import Table from "../Components/Table";
import axios from "axios";
import Pagination from "@/Components/Pagination";

const Home = () => {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleClick = useCallback((e) => {
    const { target } = e;
    const value = target.innerText;
    if (value === ">>") {
      setPage((cur) => cur + 1);
    } else if (value === "<<") {
      setPage((cur) => cur - 1);
    } else {
      setPage(value);
    }
  }, []);

  // handle Erros

  return (
    <Wrapper>
      <Title>Grepp Enterprise</Title>
      <div className="area" id="dropdown">
        드롭다운을 이 영역에 구현해주세요
      </div>
      {comments.length > 0 ? (
        isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Table comments={comments} />
        )
      ) : (
        ""
      )}
      <Pagination handleClick={handleClick} page={page} />
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
