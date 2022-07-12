import styled from "styled-components";
import { Button } from "@chakra-ui/react";

export const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px 10px 100px;
  z-index: 2;
  max-width: 95%;
  margin: 0 auto;
  .css-7xa9xu {
    &:hover {
      background-color: #fa9440;
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
`;
export const Img = styled.img`
  cursor: pointer;
  width: 250px;
  padding: 0 0 0 30px;
  margin-left: 20px;
  @media screen and (max-width: 480px) {
    width: 50%;
    margin-left: 0;
    padding: 0;
    margin-top: 10px;
  }
`;
export const ButtonCart = styled(Button)`
  margin-right: 40px;
  color: white;
  display: flex;
  gap: 5px;
  border: 2px solid white;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-top: 10px;
  }
`;
