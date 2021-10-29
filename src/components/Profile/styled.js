import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  .WrapperUserSide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    border-radius: 50%;
    width: 200px;
    margin: 10px;
  }
`;

export const WrapperUserInfo = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 4px;
  }
`;

export const WrapperCounter = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 8px;
  }

  div {
    text-align: center;
  }
`;
