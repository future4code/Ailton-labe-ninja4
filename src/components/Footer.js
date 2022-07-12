import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FooterContainer, RedesSociais } from "./FooterStyled";
export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <FooterContainer>
          <ol id="item1">
            <h3>Serviços</h3>
            <ul>Assistência Técnica</ul>
            <ul>Design e Tecnologia</ul>
            <ul>Consultoria</ul>
            <ul>Reformas</ul>
          </ol>
          <ol id="item2">
            <h3>Institucional</h3>
            <ul>Quem Somos</ul>
            <ul>Trabalhe Conosco</ul>
            <ul>Profissionais Verificados</ul>
            <ul>Fale Conosco</ul>
          </ol>
          <div id="item3">
            <RedesSociais>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <BsTwitter />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube />
              </a>
            </RedesSociais>
          </div>
        </FooterContainer>
      </div>
    );
  }
}
