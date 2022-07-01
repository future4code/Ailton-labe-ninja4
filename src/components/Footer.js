import React from "react";
import styled from "styled-components";
import { RiInstagramFill } from "react-icons/ri";  
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";



const FooterContainer = styled.div`

background-color: #F6F5F7;
/* border: 1px solid lightgrey; */
bottom: 0;
/* margin-top: 200px; */
/* position: fixed; */
width: 100%;
padding: 20px 0 20px 0;
display: flex;
justify-content: space-around;
/* color: ; */

ul {
  color: #3f3d56;
}

h3 {
  font-weight: bold;
  font-size: 20px;
  color: #450059;
}

img {
  width: 20px;
}

div {
  align-self: center;
}
`

const RedesSociais = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    color: #450059;
    width: 100%;
    gap: 10px;
    font-size: 25px;
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
              <RedesSociais>
              <a href="https://www.instagram.com/" target="_blank"><RiInstagramFill/></a>
              <a href="https://www.facebook.com/" target="_blank"><BsFacebook/></a>
              <a  href="https://twitter.com/" target="_blank"><BsTwitter/></a>
              <a href="https://www.youtube.com/" target="_blank"><BsYoutube/></a>
            </RedesSociais>
          </div>
        </FooterContainer>
      </div>
    );
  }
}
