import React from "react";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import LogoNinja from "../assets/img/labeninja.png";

const HeaderContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.img`
  width: 180px;
  padding: 10px 0 10px 30px;
`;

const BotaoComMargem = styled(Button)`
  margin-right: 40px;
`;
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer>
          <Img onClick={() => this.props.handleHomePage()} src={LogoNinja} />
          <BotaoComMargem
            colorScheme="purple"
            onClick={() => this.props.handleCartPage()}
          >
            Carrinho
          </BotaoComMargem>
        </HeaderContainer>
      </div>
    );
  }
}
