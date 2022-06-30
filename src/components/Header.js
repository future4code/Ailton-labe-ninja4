import React from "react";
import styled from "styled-components";
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import LogoNinja from "../assets/img/labe.png"
import {AiOutlineShoppingCart} from "react-icons/ai";
import { theme } from "../constants/theme";


const HeaderContainer = styled.div`
border: 1px solid lightgrey;
background-color: #450059;
display: flex;
position: fixed;
top:0;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 10px 50px 10px 100px;
z-index: 2;

`
const Img = styled.img`
    width: 250px;
    padding: 0 0 0 30px;

`
const BotaoComMargem = styled(Button)`
    margin-right: 40px;
    color: white;
    display: flex;
    border: 2px solid white;
    /* justify-content: center; */
    /* width: 200px; */
`
export default class Header extends React.Component {

  render() {
    return (
      <div>
        <ChakraProvider theme={theme}>
          <HeaderContainer>
          <Img onClick = {() => this.props.handleHomePage()}src={LogoNinja}/>
            <BotaoComMargem bg="brand.white" onClick = {() => this.props.handleCartPage()}>Área de Compras<AiOutlineShoppingCart/> </BotaoComMargem>
          </HeaderContainer>
        </ChakraProvider>
      </div>
    );
  }
}