import React from "react";
import Cart from "../../components/Cart/Cart";
import { Section } from "./Styled.js";

export default class CartPage extends React.Component {
  render() {
    return (
      <Section>
        <Cart
          listCart={this.props.listCart}
          removeToCart={this.props.removeToCart}
          serviceRemoveToCart={this.props.serviceRemoveToCart}
          goToFindJob={this.props.goToFindJob}
        />
      </Section>
    );
  }
}
