import React from "react";
import axios from "axios";
import { BASE_URL, headers } from "../../constants/url";
import { Flex, Input, Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../constants/theme";
import { Section, ButtonCreat, SelectItens } from "./Styled";
import { Spinner } from "@chakra-ui/react";
import Swal from "sweetalert2";

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
    isLoading: false,
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

    this.setState({ isLoading: true });

    try {
      await axios.post(`${BASE_URL}/jobs`, body, headers);
      this.setState({
        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        date: "",
      });
      Swal.fire(
        "",
        `Serviço ${this.state.title} criado com sucesso`,
        "success"
      );
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({ resposta: true, status: "error" });
      this.setState({ isLoading: false });
      Swal.fire('Verifique se preencheu todos os campos corretamente.', `O código do erro é: ${error.response.status}`, 'error');
    }
  };

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Section>
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
                placeholder="Título do Anúncio"
              ></Input>
              <Input
                bg="white"
                value={this.state.description}
                onChange={this.onChangeDescripton}
                mb="4%"
                placeholder="Descrição do Serviço Prestado"
              ></Input>
              <Input
                bg="white"
                value={this.state.price}
                onChange={this.onChangePrice}
                mb="4%"
                type="number"
                placeholder="Preço do Serviço Prestado"
              ></Input>
              <SelectItens
                isMulti
                options={options}
                styles="red"
                placeholder="Formas de Pagamento Aceitas"
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
                {this.state.isLoading ? <Spinner /> : "Cadastrar Serviço"}
              </ButtonCreat>
              <ButtonCreat onClick={this.props.goToFindJob}>
                Lista de Serviços
              </ButtonCreat>
            </Flex>
          </Flex>
        </Section>
      </ChakraProvider>
    );
  }
}
