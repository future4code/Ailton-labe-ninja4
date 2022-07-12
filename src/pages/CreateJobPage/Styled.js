import styled from "styled-components";
import Select from "react-select";

export const Section = styled.section`
  @media screen and (max-width: 480px) {
    .css-1syf8ka {
      width: 96%;
      margin-top: 30px;
      p {
        margin-top: 15px;
      }
    }
  }
`;
export const ButtonCreat = styled.button`
  color: #450059;
  font-weight: bold;
  border-radius: 0.375rem;
  font-size: 1.5rem;
  margin: 0.2rem;
  background-color: #e2e8f0;
  height: 42px;
  &:hover {
    background-color: #ff784f;
    color: white;
  }
`;

export const SelectItens = styled(Select)`
  .css-12jo7m5 {
    background-color: #b4abb6;
    border-radius: 0.2rem;
    border: black;
  }
  .css-xb97g8 {
    background-color: #b4abb6;
  }
`;
