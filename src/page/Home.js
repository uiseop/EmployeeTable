import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Table from "../Components/Table";
import useFetchUser from "../Hooks/useFetchUser";

const Home = () => {
  const [page, setPage] = useState("1");
  const [isLoading, isError, fetchUser] = useFetchUser();
  const [comments, setComments] = useState([]);

  const handleClick = (e) => {
    const { target } = e;
    const value = target.innerText;
    setPage(value);
  };

  useEffect(() => {
    fetchAndSetUser(page);
  }, [page]);

  const fetchAndSetUser = async (page) => {
    const data = await fetchUser(page);
    setComments(data);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <Title>Grepp Enterprise</Title>
      <div className="area" id="dropdown">
        드롭다운을 이 영역에 구현해주세요
      </div>
      <Table comments={comments} />
      <div className="area" id="pagination">
        <button className="arrow">&lt;&lt;</button>
        <button onClick={handleClick}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button className="arrow">&gt;&gt;</button>
      </div>
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
