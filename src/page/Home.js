import { useEffect, useState } from "react";
import fetchUser from "../utils/fetchUser";

const Home = () => {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchUser(page);
  }, []);

  return (
    <div className="App">
      <div id="page_title">Grepp Enterprise</div>
      <div className="area" id="dropdown">
        드롭다운을 이 영역에 구현해주세요
      </div>
      <div className="area" id="table">
        테이블을 이 영역에 구현해주세요
      </div>
      <div className="area" id="pagination">
        <button className="arrow">&lt;&lt;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button className="arrow">&gt;&gt;</button>
      </div>
    </div>
  );
};

export default Home;
