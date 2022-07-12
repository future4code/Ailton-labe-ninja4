import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 100px;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 3px 2px black;
  border-radius: 2rem;
  background-color: #d6bcfa;
  width: 30rem;
  height: 30rem;
  margin: 0 auto;

  svg {
    color: #450059;
  }
  @media screen and (max-width: 480px) {
    margin-top: 50px;
    width: 95%;
  }
`;
export const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  width: 90%;
  li {
    list-style-position: inside;
    text-align: justify;
  }
  p {
    word-break: break-word;
    line-height: 25px;
    margin-bottom: 10px;
  }
  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const ButtonsSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  width: 100%;
  margin-top: 8px;
  #cartDisable {
    color: grey;
  }
`;

export const Border = styled.div`
  margin-top: 100px;
  border: solid 1px black;
  width: 25rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
