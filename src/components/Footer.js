import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  border: 1px solid black;
  bottom: 0;
  position: fixed;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <FooterContainer>
          <p>Serviços</p>
          <p>Institucionais</p>
          <p>Ícones de ir para redes sociais</p>
        </FooterContainer>
      </div>
    );
  }
}
