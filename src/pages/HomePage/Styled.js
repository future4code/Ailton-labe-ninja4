import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  grid-template-rows: 1fr 1fr;
  grid-row: 1/2;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  margin-top: 50px;

  p {
    font-size: 3rem;
    font-weight: bold;
    text-align: justify;
  }

  button {
    display: flex;
    width: 160px;
    height: 40px;
    margin: 20px auto;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: white;
    &:hover {
      background-color: #fa9440;
    }
  }
`;

export const TwoButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding-bottom: 30px;
  padding-top: 10px;
  max-width: 95%;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }

  p {
    display: grid;
    grid-row: 1/2;
    justify-self: center;
    align-self: center;
    color: #450059;
    line-height: 110%;
  }

  span {
    color: #ff784f;
  }
  img {
    display: flex;
    grid-column: 2/3;
    justify-self: start;
    width: 550px;
  }
`;
