import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import FindJobPage from "./pages/FindJobPage/FindJobPage";
import CreateJobPage from "./pages/CreateJobPage/CreateJobPage";
import CartPage from "./pages/CartPage/CartPage";
import styled from "styled-components";
import axios from "axios";

export default class App extends React.Component {
  state = {
    changePage: 'Home',
  }

  handlePageHome = () => {
    this.setState({changePage: 'Home'});
    {this.onChange()} 
    console.log("Entrei");
  };

  handleCreateJobPage = () => {
    this.setState({changePage: 'CreatJobPage'})
  }

  handleFindJobPage = () => {
    this.setState({changePage: 'FindJobPage'});
    this.onChange();
  }

  handleCartPage = () => {
    this.setState({changePage: 'CartPage'})
  }

  onChange = () => {
    switch (this.state.changePage) {
      case 'Home': 
      return <HomePage/>
      case 'CreatJobPage': 
      return <CreateJobPage/>
      case 'FindJobPage': 
      return <FindJobPage/>
      case 'CartPage': 
      return <CartPage/>
      default:
        return <HomePage/>
    }
  }

  render() {

    return (
      <div>
        <Header handlePageHome = {this.handlePageHome} handleCartPage = {this.handleCartPage}/>

        <main>
        <button onClick = {this.handleFindJobPage}>Contratar um ninja</button>
    
        <button onClick = {this.handleCreateJobPage}>Seja um ninja</button>
        {this.onChange()}      
        </main>
        <Footer/>
      </div>
    );
  }
}
