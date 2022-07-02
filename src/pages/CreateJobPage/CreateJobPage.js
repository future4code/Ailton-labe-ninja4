import React from "react";
import axios from "axios";
import { BASE_URL, headers } from "../../constants/url";
import Select from "react-select";
import { Flex, Button, Input, Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
// import { Button } from '@chakra-ui/react'
import { theme } from "../../constants/theme";
import styled from "styled-components";

const ButtonCreat = styled.button`
  color: #450059;
  font-weight: bold;
  border-radius: 0.375rem;
  font-size: 1.5rem;
  margin: 0.2rem;
  background-color: #e2e8f0;
  height: 42px;
  &:hover {
    background-color: #ff784f;
    color: white;
  }
`;

const SelectTeste = styled(Select)`
.css-12jo7m5{
    background-color: #b4abb6;
    border-radius: 0.2rem;
    border: black;
  }
.css-xb97g8{
    background-color: #b4abb6;
}
  `

const options = [
  { value: 1, label: " Cartão de Débito" },
  { value: 2, label: " Cartão de Crédito" },
  { value: 3, label: " Pix" },
  { value: 4, label: " Paypal" },
  { value: 5, label: " Boleto" },
  { value: 6, label: " Dinheiro" },
];
export default class CreateJobPage extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    paymentMethods: [],
    date: "",
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeDescripton = (event) => {
    this.setState({ description: event.target.value });
  };

  onChangePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  onChangePaymentMethods = (event) => {
    this.setState({
      paymentMethods: Array.isArray(event)
        ? event.map((option) => option.label)
        : [],
    });
  };

  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  createJob = async () => {
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.date,
    };
    try {
      const res = await axios.post(`${BASE_URL}/jobs`, body, headers);
      console.log(res);
      this.setState({
        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        date: "",
      });
      alert(`Serviço ${this.state.title} criado com sucesso`);
    } catch (error) {
      console.log(error.response.data.message);
      this.setState({ resposta: true, status: "error" });
      alert("Algo deu errado, tente novamente!");
    }
  };

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Flex direction="column" mt="1rem" alignItems="center">
          <Flex
            shadow="dark-lg"
            borderRadius="2rem"
            p="1rem"
            bg="brand.violet"
            direction="column"
            w="35rem"
            h="32rem"
          >
            <Text color="brand.white" textAlign="center" fontSize="2rem">
              Cadastre o seu serviço!
            </Text>
            <Input
              bg="white"
              value={this.state.title}
              onChange={this.onChangeTitle}
              mt="8%"
              mb="4%"
              placeholder="Título do anúncio"
            ></Input>
            <Input
              bg="white"
              value={this.state.description}
              onChange={this.onChangeDescripton}
              mb="4%"
              placeholder="Descrição do serviço prestado"
            ></Input>
            <Input
              bg="white"
              value={this.state.price}
              onChange={this.onChangePrice}
              mb="4%"
              type="number"
              placeholder="Informe o preço"
            ></Input>
            <SelectTeste
              isMulti
              options={options}
              styles='red'
              placeholder="Informe as formas de pagamento aceitas"
              onChange={this.onChangePaymentMethods}
              onSelect={this.onChangePaymentMethods}
            />
            <Input
              bg="white"
              value={this.state.date}
              onChange={this.onChangeDate}
              type="date"
              mt="4%"
              mb="4%"
              placeholder="Informe o prazo disponível"
            ></Input>
            <ButtonCreat onClick={this.createJob}>
              Cadastrar Serviço
            </ButtonCreat>
            <ButtonCreat onClick={this.props.goToFindJob}>
              Lista de Serviços
            </ButtonCreat>
          </Flex>
        </Flex>
      </ChakraProvider>
    );
  }
}
