import React from "react"
import styled from "styled-components"

const Card = styled.div`
    border: 1px solid black;
    padding: 15px;
    margin: 12px;
` 

export default class JobCard extends React.Component{
    render () {
    return (
        <Card>
            <h3>{this.props.job.title}</h3>
            <p><b>Preço:</b> R${this.props.job.price}</p>
            <p><b>Prazo:</b> {this.props.job.dueDate}</p>
            <button onClick={this.props.goToDetailPage}>Ver detalhes</button>
            <button>Adicionar no Carrinho</button>
        </Card>
    )
}}