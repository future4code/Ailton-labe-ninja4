import React from "react";
import { Section, Card, Scroll, } from "./Style.js";
import { BsTrash } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import Carrinho from '../../assets/img/carrinho.gif'


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
        <Scroll>
        {cartComponents.length !== 0 ? cartComponents : <div><img src={Carrinho} alt='carrinho vazio'/> <h2>Seu Carrinho está vazio!</h2></div>}
        <Button colorScheme="purple">Comprar serviços</Button>
        </Scroll>
      </Section>
    );
  }
}
