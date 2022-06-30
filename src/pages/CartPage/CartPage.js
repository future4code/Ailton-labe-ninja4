import React from "react";
import HomePage from "../HomePage/HomePage";
import { Button } from "@chakra-ui/react";
import Cart from "../../components/Cart/Cart";

export default class CartPage extends React.Component {
  render() {
    return (
      <section>
        <Cart
          listCart={this.props.listCart}
          serviceRemoveToCart={this.props.serviceRemoveToCart}
        />
        <Button colorScheme="purple" onClick={this.props.goToFindJob}>
          Volta para lista de serviços
        </Button>
        <Button colorScheme="purple">Comprar serviços</Button>
      </section>
    );
  }
}
