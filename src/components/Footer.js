import React from "react";
import styled from "styled-components";
import { RiInstagramFill } from "react-icons/ri";  
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";



const FooterContainer = styled.div`

background-color: #86778a;
/* border: 1px solid lightgrey; */
bottom: 0;
margin-top: 200px;
position: fixed;
width: 100vw;
padding: 30px 30px 30px 30px;
display: flex;
justify-content: space-around;
/* color: ; */

ul {
  color: white;
}

h3 {
  font-weight: bold;
  font-size: 20px;
  color: #450059;
}

img {
  width: 20px;
}
`
const RedesSociais = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    color: white;
    font-size: 40px;
`

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <FooterContainer>
          <ol>
            <h3>Serviços</h3>
            <ul>Assistência Técnica</ul>
            <ul>Design e Tecnologia</ul>
            <ul>Consultoria</ul>
            <ul>Reformas</ul>
          </ol>
          <ol>
            <h3>Institucional</h3>
            <ul>Quem Somos</ul>
            <ul>Trabalhe Conosco</ul>
            <ul>Profissionais Verificados</ul>
            <ul>Fale Conosco</ul>
          </ol>
          <div>
            <h3>Redes sociais</h3>
            <RedesSociais>
              <RiInstagramFill/>
              <BsFacebook/>
              <BsTwitter/>
              <BsYoutube/>
            </RedesSociais>
          </div>
          <h3>Donwloads</h3>
        </FooterContainer>
      </div>
    );
  }
}
