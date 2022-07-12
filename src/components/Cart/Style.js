import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 30px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 2px 3px 2px black;
  border-radius: 2rem;
  background-color: #d6bcfa;
  width: 30rem;
  height: 30rem;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;
export const Card = styled.section`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
  border-bottom: 1px dashed #450059;
  p {
    word-break: break-word;
    line-height: 25px;
  }
  h1 {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;
export const Scroll = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  margin-top: 30px;
  overflow: overlay;
  #purchaseDisable {
    color: grey;
  }

  .css-5vhb64 {
    background-color: #450059;
    &:hover {
      background-color: #fa9440;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #450059;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }

  img {
    margin: 0 auto;
  }
  h1 {
    margin-top: 20px;
  }
  h2 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: grey;
  }

  svg {
    cursor: pointer;
    display: flex;
    justify-self: center;
    font-size: 25px;
    color: #450059;
  }
`;

export const Img = styled.img`
  width: 85%;
  margin: 0 auto;
`;
