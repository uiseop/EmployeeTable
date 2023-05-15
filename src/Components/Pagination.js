import { useState } from "react";
import { styled } from "styled-components";

const Pagination = ({ handleClick, page, total, limit }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <Wrapper>
      {page !== 1 && (
        <button className="arrow" onClick={handleClick}>
          &lt;&lt;
        </button>
      )}
      {Array(numPages)
        .fill(null)
        .map((_, idx) => {
          if (page == idx + 1) {
            return (
              <button className="selected" key={idx} onClick={handleClick}>
                {idx + 1}
              </button>
            );
          }
          return (
            <button key={idx} onClick={handleClick}>
              {idx + 1}
            </button>
          );
        })}
      {page !== numPages && (
        <button className="arrow" onClick={handleClick}>
          &gt;&gt;
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  background-color: white;

  & > button {
    margin: 0 10px;
    color: #363636;
    font-size: 1rem;
    font-weight: 550;
    border: 0;
    padding: 4px 10px;
    border-radius: 4px;
    background-color: #e6e6e6;
    cursor: pointer;

    &.arrow {
      color: red;
    }
  }

  & > button.selected {
    color: #fff;
    background-color: #363636;
  }
`;

export default Pagination;
