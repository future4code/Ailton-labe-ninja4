import React from "react";
import styled from "styled-components";
import {Section} from "./Style.js";

const Card = styled.div`
  border: 1px solid black;
  padding: 15px;
  margin: 12px;
`;

export default class Cart extends React.Component {
  render() {
    {
      console.log(this.props.listCart);
    }

    const cartComponents = this.props.listCart.map((job) => {
      return (
        <Card key={job.id}>
            <h3>{job.title}</h3>
            <p>
              <b>Preço:</b> R$ {job.price}
            </p>
            <button onClick={() => this.props.serviceRemoveToCart(job)}>Remover</button>
          </Card>)    
    });

    return <Section>{cartComponents ? cartComponents : <h2>Seu carrinho está vazio!</h2>} </Section>;
  }
}
