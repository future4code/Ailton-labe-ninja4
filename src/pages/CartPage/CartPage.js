import React from "react";
import { Button } from "@chakra-ui/react";
import Cart from "../../components/Cart/Cart";
import {Section} from "./Styled.js";

export default class CartPage extends React.Component {
  render() {
    return (
      <Section>
        <Cart
          listCart={this.props.listCart}
          serviceRemoveToCart={this.props.serviceRemoveToCart}
        />
        <Button colorScheme="purple" onClick={this.props.goToFindJob}>
          Volta para lista de serviços
        </Button>
        <Button colorScheme="purple">Comprar serviços</Button>
      </Section>
    );
  }
}
