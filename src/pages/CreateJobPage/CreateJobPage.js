import React from "react";
import { BASE_URL, headers } from "../../constants/url";
import axios from "axios";

export default class CreateJobPage extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    paymentMethods: [],
    dueDate: "",
  };
  onChangeTiltle = (event) => {
    this.setState({ title: event.target.value });
  };
  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  onChangePrice = (event) => {
    this.setState({ price: event.target.value });
  };
  onChangePaymentMethods = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    this.setState({ paymentMethods: value });
  };

  onChangeDueDate = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  createJob = async () => {
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate,
    };
    try {
      const res = await axios.post(`${BASE_URL}/jobs`, body, headers);
      alert(`Serviço ${this.state.title} criado com sucesso`);
      this.setState({
        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        dueDate: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Titulo"
          value={this.state.title}
          onChange={this.onChangeTiltle}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={this.state.description}
          onChange={this.onChangeDescription}
        />
        <input
          type="number"
          placeholder="Preço"
          value={this.state.price}
          onChange={this.onChangePrice}
        />
        <input
          type="date"
          placeholder="Prazo Máximo"
          value={this.state.dueDate}
          onChange={this.onChangeDueDate}
        />
        <select
          multiple
          value={this.state.paymentMethods}
          onChange={this.onChangePaymentMethods}
        >
          <option>Cartão de Débito</option>
          <option>Cartão de Crédito</option>
          <option>PayPal</option>
          <option>Boleto</option>
          <option>Pix</option>
        </select>
        <button onClick={this.createJob}>Adicionar</button>
        <button onClick={this.props.goToFindJob}>Ir para lista serviços</button>
      </div>
    );
  }
}
