import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import axios from "axios";
import { BASE_URL, headers } from "../../constants/url";
import { Flex } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../constants/theme";
import { CardsContainer, Filters, Inputs, Button } from "./Styled";
import { Spinner } from "@chakra-ui/react";
import Swal from "sweetalert2";

export default class FindJobPage extends React.Component {
  state = {
    jobsList: [],
    filteredJobsList: [],
    title: "",
    valueMin: "",
    valueMax: "",
    order: "",
    isLoading: false,
  };

  componentDidMount() {
    this.getJobs();
  }

  handleValueMin = (event) => {
    this.setState({ valueMin: event.target.value });
  };

  handleValueMax = (event) => {
    this.setState({ valueMax: event.target.value });
  };

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  handleOrder = (event) => {
    this.setState({ order: event.target.value });
  };

  getJobs = () => {
    this.setState({ isLoading: true });
    axios
      .get(`${BASE_URL}/jobs`, headers)
      .then((res) => {
        this.setState({
          jobsList: res.data.jobs,
          filteredJobsList: res.data.jobs,
        });
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        Swal.fire("", err.response.data.message, "error");
        this.setState({ isLoading: false });
      });
  };

  removeJob = (jobId) => {
    if ((Swal.fire({
      title: 'Tem certeza que deseja remover este serviço??',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#450059',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim!'
    }).then((result) => {
      this.getJobs();
      if (result.isConfirmed) {
        Swal.fire(
          'Serviço Deletedado com Sucesso!',
        )
      }
    }))) {
      axios
        .delete(`${BASE_URL}/jobs/${jobId}`, headers)
        .then(() => {
          this.getJobs();
        })
        .catch((err) => {
          Swal.fire("", err.response.data.message, "error");;
        });
    }
  };

  render() {
    const minimum = Number(this.state.valueMin)
      ? Number(this.state.valueMin)
      : 0;
    const maximum = Number(this.state.valueMax)
      ? Number(this.state.valueMax)
      : 100000;
    const newList = this.state.jobsList
      .filter((job) => job.price >= minimum)
      .filter((job) => job.price <= maximum)
      .filter((job) => {
        const text = job.title.toLowerCase();
        const text2 = job.description.toLowerCase();
        const search = this.state.title.toLowerCase();
        return text.includes(search) || text2.includes(search);
      })
      .sort((a, b) => {
        switch (this.state.order) {
          case "Menor Valor":
            return a.price - b.price;
          case "Maior Valor":
            return b.price - a.price;
          case "Titulo":
            return a.title.localeCompare(b.title);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
          default:
            return "";
        }
      });

    const jobComponents = newList.map((job) => {
      return (
        <div key={job.id}>
          <Button onClick={() => this.removeJob(job.id)}>x</Button>

          <JobCard
            job={job}
            goToDetailPage={this.props.goToDetailPage}
            addToCart={this.props.addToCart}
            btnDisabled={this.props.btnDisabled}
            listCart={this.props.listCart}
          />
        </div>
      );
    });

    return (
      <ChakraProvider theme={theme}>
        <Filters>
          <Flex justify="center" gap="10">
            <Inputs
              type="text"
              value={this.state.title}
              onChange={this.handleTitle}
              placeholder="Titulo ou Descrição"
            />
            <Inputs
              type="number"
              value={this.state.valueMin}
              onChange={this.handleValueMin}
              placeholder="Valor Mínimo"
            />
            <Inputs
              type="number"
              value={this.state.valueMax}
              onChange={this.handleValueMax}
              placeholder="Valor Máximo"
            />
            <select value={this.state.order} onChange={this.handleOrder}>
              <option value={"Sem Ordenacao"}>Sem Ordenação</option>
              <option value={"Menor Valor"}>Menor Valor</option>
              <option value={"Maior Valor"}>Maior Valor</option>
              <option value={"Titulo"}>Título</option>
              <option value={"Prazo"}>Prazo</option>
            </select>
          </Flex>
        </Filters>
        <CardsContainer>
          {this.state.isLoading ? <Spinner margin= "auto" /> : jobComponents}
        </CardsContainer>
      </ChakraProvider>
    );
  }
}
