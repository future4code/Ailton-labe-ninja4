import React from "react";
import styled from "styled-components";
import { formatDate } from "../../constants/formatDate";

const Card = styled.div`
  border: 1px solid black;
  padding: 15px;
  margin: 12px;
`;

const Button = styled.button`
  border: 1px solid lightgrey;
  background: lightgray;
  &_disabled {
    background: red;
  }
`

export default class JobCard extends React.Component {

  render() {
    return (
      <Card>
        <h3>{this.props.job.title}</h3>
        <p>
          <strong>Preço:</strong> R$ {this.props.job.price},00
        </p>
        <p>
          <strong>Prazo:</strong> {formatDate(this.props.job.dueDate)}
        </p>
        <button onClick={() => this.props.goToDetailPage(this.props.job)}>Ver detalhes</button>
        <Button onClick={() => this.props.addToCart(this.props.job)} disabled={this.props.btnDisabled && true} >Adicionar no Carrinho</Button>
      </Card>
    );
  }
}
