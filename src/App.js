import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import FindJobPage from "./pages/FindJobPage/FindJobPage";
import JobDetailPage from "./pages/JobDetailPage/JobDetailPage"
import CreateJobPage from "./pages/CreateJobPage/CreateJobPage";
import CartPage from "./pages/CartPage/CartPage";
import styled from "styled-components";
import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default class App extends React.Component {
  state = {
    changePage: 'Home',
    title: '',
    price: '',
    duoDate: ''
  }

  handleHomePage = () => {
    this.setState({changePage: 'Home'});
     
    
  };

  handleCreateJobPage = () => {
    this.setState({changePage: 'CreatJobPage'})
  
  }

  handleFindJobPage = () => {
    this.setState({changePage: 'FindJobPage'});
  }

  handleCartPage = () => {
    this.setState({changePage: 'CartPage'})
  }
  handleDetailPage = () => {
    this.setState({changePage: 'DetailPage'})
    
  }

  changePage = () => {
    switch (this.state.changePage) {
      case 'Home': 
      return <HomePage 
      goToFindJob={this.handleFindJobPage}
      goToCreatedJob={this.handleCreateJobPage}
      />
      case 'CreatJobPage': 
      return <CreateJobPage  
      />
      case 'FindJobPage':
      return <FindJobPage
      goToDetailPage={this.handleDetailPage} 
      />
      case 'DetailPage':
      return <JobDetailPage/>
      case 'CartPage': 
      return <CartPage
      goToFindJob={this.handleFindJobPage}
      goToCreatedJob={this.handleCreateJobPage}
      />
      default:
        return <HomePage/>
        
    }
    
  }

  render() {
  
    return (
      <ChakraProvider>
        <Header handleHomePage = {this.handleHomePage} handleCartPage = {this.handleCartPage}/>

        <main>
            {this.changePage()}
        </main>
        <Footer/>
      </ChakraProvider>
    );
  }
}
