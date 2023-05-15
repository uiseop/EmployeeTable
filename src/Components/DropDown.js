import { styled } from "styled-components";

const DropDown = ({ limit, handleChange }) => {
  return (
    <Wrapper>
      <select onChange={handleChange} value={limit}>
        <option value={5}>5개씩</option>
        <option value={10}>10개씩</option>
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
`;

export default DropDown;
