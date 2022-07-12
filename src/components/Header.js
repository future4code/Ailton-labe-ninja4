import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LogoNinja from "../assets/img/logotest.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { theme } from "../constants/theme";
import { HeaderContainer, Img, ButtonCart } from "./HeaderStyled";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <ChakraProvider theme={theme}>
          <HeaderContainer>
            <Img onClick={() => this.props.handleHomePage()} src={LogoNinja} />
            <ButtonCart
              bg="brand.violet"
              onClick={() => this.props.handleCartPage()}
            >
              Carrinho <AiOutlineShoppingCart />
            </ButtonCart>
          </HeaderContainer>
        </ChakraProvider>
      </div>
    );
  }
}
