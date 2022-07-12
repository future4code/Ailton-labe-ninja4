import React from "react";
import { Section, Card, Scroll, Img } from "./Style.js";
import { BsTrash } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import Carrinho from "../../assets/img/carrinho.gif";
import Swal from "sweetalert2";

export default class Cart extends React.Component {
  state = {
    removed: false,
  };

  totalPurchase = () => {
    let totalCoast = 0;
    for (let job of this.props.listCart) {
      totalCoast += job.price;
    }
    return totalCoast;
  };

  render() {
    let cartComponents = this.props.listCart.map((job) => {
      return (
        <Card key={job.id}>
          <h1>{job.title}</h1>
          <p>
            <b>Preço:</b> R$ {job.price},00
          </p>
          <BsTrash onClick={() => this.props.serviceRemoveToCart(job)} />
        </Card>
      );
    });

    const purchase = () => {
      Swal.fire("", "Compra finalizada com sucesso!", "success");
      this.props.removeToCart();
    };

    return (
      <Section>
        <Scroll>
          <RiArrowGoBackFill onClick={this.props.goToFindJob} />
          {cartComponents.length !== 0 ? (
            <div>
              {cartComponents}
              <h1>
                <strong>Valor Total:</strong> R$ {this.totalPurchase()},00
              </h1>
            </div>
          ) : (
            <div>
              <Img src={Carrinho} alt="carrinho vazio" />{" "}
              <h2>Seu Carrinho está vazio!</h2>
            </div>
          )}
          {this.props.listCart.length !== 0 ? (
            <Button colorScheme="purple" onClick={purchase}>
              Comprar serviços
            </Button>
          ) : (
            <button />
          )}
        </Scroll>
      </Section>
    );
  }
}
