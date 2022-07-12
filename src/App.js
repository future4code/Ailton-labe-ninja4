import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import FindJobPage from "./pages/FindJobPage/FindJobPage";
import JobDetailPage from "./pages/JobDetailPage/JobDetailPage";
import CreateJobPage from "./pages/CreateJobPage/CreateJobPage";
import CartPage from "./pages/CartPage/CartPage";
import { ChakraProvider } from "@chakra-ui/react";
import Swal from "sweetalert2";

export default class App extends React.Component {
  state = {
    changePage: "Home",
    title: "",
    price: "",
    duoDate: "",
    listCart: [],
    jobInfo: {},
    btnDisabled: false,
  };

  handleHomePage = () => {
    this.setState({ changePage: "Home" });
  };

  handleCreateJobPage = () => {
    this.setState({ changePage: "CreatJobPage" });
  };

  handleFindJobPage = () => {
    this.setState({ changePage: "FindJobPage" });
  };

  handleCartPage = () => {
    this.setState({ changePage: "CartPage" });
  };

  handleDetailPage = (job) => {
    this.setState({ changePage: "DetailPage", jobInfo: job });
  };

  componentDidMount() {
    const jobString = localStorage.getItem("jobs");
    const job = JSON.parse(jobString);

    if (job) {
      this.setState({ listCart: job });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("jobs", JSON.stringify(this.state.listCart));
  }

  addToCart = (job) => {
    const checkedJob = this.state.listCart.find(
      (jobItem) => job.id === jobItem.id
    );

    if (!checkedJob) {
      const newListCart = [...this.state.listCart, job];

      this.setState({ listCart: newListCart });
      Swal.fire("", `Serviço ${job.title} adicionado ao carrinho!`, "success");
    }
    this.setState({ btnDisabled: true });
  };

  removeToCart = () => {
    const emptylistCart = this.state.listCart

    emptylistCart.splice(0, emptylistCart.length);

    this.setState({ listCart: emptylistCart });

  }

  serviceRemoveToCart = (job) => {
    if (Swal.fire(`${job.title} Removido do Carrinho!`)) {
      const removeToCart = this.state.listCart.filter((jobItem) => {
        if (job.id !== jobItem.id) {
          return {
            ...jobItem,
          };
        }
      });
      this.setState({ listCart: removeToCart });
    }
  };

  changePage = () => {
    switch (this.state.changePage) {
      case "Home":
        return (
          <HomePage
            goToFindJob={this.handleFindJobPage}
            goToCreatedJob={this.handleCreateJobPage}
          />
        );
      case "CreatJobPage":
        return <CreateJobPage goToFindJob={this.handleFindJobPage} />;
      case "FindJobPage":
        return (
          <FindJobPage
            goToDetailPage={this.handleDetailPage}
            addToCart={this.addToCart}
            btnDisabled={this.state.btnDisabled}
            listCart={this.state.listCart}
          />
        );
      case "DetailPage":
        return (
          <JobDetailPage
            goToFindJob={this.handleFindJobPage}
            jobInfo={this.state.jobInfo}
            listCart={this.state.listCart}
            addToCart={this.addToCart}
          />
        );
      case "CartPage":
        return (
          <CartPage
            goToFindJob={this.handleFindJobPage}
            goToCreatedJob={this.handleCreateJobPage}
            serviceRemoveToCart={this.serviceRemoveToCart}
            listCart={this.state.listCart}
            removeToCart={this.removeToCart}
          />
        );
      default:
        return <HomePage />;
    }
  };

  render() {
    return (
      <ChakraProvider>
        <Header
          handleHomePage={this.handleHomePage}
          handleCartPage={this.handleCartPage}
        />
        <main>{this.changePage()}</main>
      </ChakraProvider>
    );
  }
}
