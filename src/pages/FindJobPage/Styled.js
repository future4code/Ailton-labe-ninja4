import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 100px;
  padding-top: 0px;
  width: 100%;
 
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 12px;
  @media screen and (min-width: 761px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
    width: 90%;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  select{
    border: 1px solid black;
    width: 300px;
    height: 35px;
    border-radius: 5px;
    background-color: white;
    
  }
  .css-1ysf10c {
    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      gap: 10px;
    }
  }
`;
export const Inputs = styled.input`
  padding-left: 0.3rem;
  display: inline;
  border: 1px solid black;
  width: 300px;
  height: 35px;
  border-radius: 5px;
`;

export const Button = styled.button`
color: white;
`