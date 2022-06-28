import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div`
border: 1px solid black;
`
export default class Header extends React.Component {

  render() {
    return (
      <div>
        <HeaderContainer>
          <p>Logo</p>
          <button onClick = {() => this.props.handleHomePage()}>Home</button>
          <button onClick = {() => this.props.handleCartPage()}>Carrinho</button>
        </HeaderContainer>
      </div>
    );
  }
}