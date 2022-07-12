import React from "react";
import { formatDate } from "../../constants/formatDate";
import { Flex } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Card, CardButtons } from "./styled";

export default class JobCard extends React.Component {
  render() {
    const status = this.props.listCart.filter((item) => {
      return item.id === this.props.job.id;
    });

    return (
      <Flex
        borderRadius="10px"
        border="1px"
        borderColor="purple.700"
        bg="purple.200"
        minW="250px"
        gap="10px"
        direction="column"
        m="5px"
        p="15px"
      >
        <Card>
          <h2>{this.props.job.title}</h2>
          <p>
            <strong>Preço:</strong> R$ {this.props.job.price},00
          </p>
          <p>
            <strong>Prazo:</strong> {formatDate(this.props.job.dueDate)}
          </p>
          <CardButtons>
            <BsInfoCircle
              onClick={() => this.props.goToDetailPage(this.props.job)}
            />
            {status.length === 0 ? (
              <AiOutlineShoppingCart
                onClick={() => this.props.addToCart(this.props.job)}
              />
            ) : (
              <AiOutlineShoppingCart id="cartDisable" />
            )}
          </CardButtons>
        </Card>
      </Flex>
    );
  }
}
