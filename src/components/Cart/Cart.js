import React from "react";
import styled from "styled-components";
import { Section } from "./Style.js";
import { BsTrash } from "react-icons/bs";
import { Button } from "@chakra-ui/react";

const Card = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  li {
    list-style-position: inside;
    text-align: justify;
  }
  p {
    word-break: break-word;
    line-height: 25px;
  }
  h1 {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export default class Cart extends React.Component {
  render() {
    const cartComponents = this.props.listCart.map((job) => {
      return (
        <Card key={job.id}>
          <h1>{job.title}</h1>
          <p>
            <b>Preço:</b> R$ {job.price}
          </p>
          <BsTrash onClick={() => this.props.serviceRemoveToCart(job)} />
        </Card>
      );
    });
    return (
      <Section>
        {cartComponents ? cartComponents : <h2>Seu carrinho está vazio!</h2>}{" "}
        <Button colorScheme="purple">Comprar serviços</Button>
      </Section>
    );
  }
}
