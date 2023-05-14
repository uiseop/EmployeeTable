import { styled } from "styled-components";

const Table = ({ comments }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {comments.length &&
            Object.keys(comments[0]).map((title) => {
              return <th map={title}>{title}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 1rem;

  & thead {
    font-weight: bold;
  }

  & th,
  td {
    border: 1px solid #dddddd;
    padding: 8px;
  }

  & thead > tr,
  tr:nth-child(even) {
    background: lightgray;
  }

  & td {
    text-align: center;
  }

  & tr {
    cursor: pointer;
  }
`;

export default Table;
