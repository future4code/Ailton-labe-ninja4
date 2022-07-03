import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid black;
  padding: 15px;
  margin: 12px;
  text-align: center;

  h2 {
    font-weight: bold;
    padding-bottom: 0.2rem;
  }
`;

export const CardButtons = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  margin-top: 0.6rem;
  font-size: 1.6rem;
  #cartDisable {
    color: grey;
  }
`;
