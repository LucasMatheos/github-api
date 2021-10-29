import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 30px;
    padding: 8px;
    font-weight: 500;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #ccc;
    padding: 7px 16px;
    border: none;
    border-radius: 8px;
    margin-left: 8px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
      font-weight: bold;
    }
  }
`;
