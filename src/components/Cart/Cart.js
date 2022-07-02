import React from "react";
import { Section, Card, Scroll, } from "./Style.js";
// import Swal from 'sweetalert2'
import { BsTrash } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import Carrinho from '../../assets/img/carrinho.gif'


export default class Cart extends React.Component {
  state = {
    removed: false
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
  }

  render() {
    let cartComponents = this.props.listCart.map((job) => {
      return (
        <Card key={job.id}>
          <h1>{job.title}</h1>
          <p>
            <b>Preço:</b> R$ {job.price}
          </p>
          <BsTrash onClick={() => this.props.serviceRemoveToCart(job)} />
        </Card>
      );
    });

    const purchase = () => {
      // Swal.fire("", "Compra finalizada com sucesso!", "success");
      alert(`Compra finalizada com sucesso!`)
      this.props.removeToCart()
    }

    return (
      <Section>
        <Scroll>
        <RiArrowGoBackFill onClick={this.props.goToFindJob} />
        {cartComponents.length !== 0 ? cartComponents : <div><img src={Carrinho} alt='carrinho vazio'/> <h2>Seu Carrinho está vazio!</h2></div>}
        <Button colorScheme="purple" onClick={purchase}>Comprar serviços</Button>
        </Scroll>
      </Section>
    );
  }
}
