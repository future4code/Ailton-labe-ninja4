import React from "react";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Botoes = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Botoes>
          <Button colorScheme="purple" onClick={this.props.goToFindJob}>
            Contratar um ninja
          </Button>
          <Button colorScheme="purple" onClick={this.props.goToCreatedJob}>
            Seja um ninja
          </Button>
        </Botoes>
        <section></section>
        <p>Home </p>
      </div>
    );
  }
}
