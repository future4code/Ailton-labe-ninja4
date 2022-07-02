import React from "react";
import styled from "styled-components";
import axios from "axios";
import { formatDate } from "../../constants/formatDate";
import { BASE_URL, headers } from "../../constants/url";
import { Section } from "./Styled.js";
import { Flex } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../constants/theme";

const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  width: 90%;
  li {
    list-style-position: inside;
    text-align: justify;
  }
  p {
    word-break: break-word;
    line-height: 25px;
  }
  h1 {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const ButtonsSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  width: 100%;
  margin-top: 8px;
  #cartDisable {
    color: grey;
  }
`;

const Border = styled.div`
  margin-top: 100px;
  border: solid 1px black;
  width: 25rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  `

export default class DetailPage extends React.Component {
  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    axios
      .get(`${BASE_URL}/jobs`, headers)
      .then((res) => {
        this.setState({
          jobsList: res.data.jobs,
          filteredJobsList: res.data.jobs,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    const status = this.props.listCart.filter((item) => {
      return item.id === this.props.jobInfo.id;
    });

    const listResults = this.props.jobInfo.paymentMethods.map((pay, index) => (
      <li key={index}>{pay}</li>
    ));

    return (
      <Section>
		  <Border>
        <DetailsSection>
          <h1>{this.props.jobInfo.title}</h1>
          <p>{this.props.jobInfo.description}</p>
          <p>
            <strong>Preço:</strong>R$ {this.props.jobInfo.price},00
          </p>
          <p>
            <strong>Prazo:</strong> {formatDate(this.props.jobInfo.dueDate)}
          </p>
          <p>
            <strong>Formas de Pagamento:</strong>
          </p>
          <ul>
            <div>{listResults}</div>
          </ul>
          <ButtonsSection>
            {status.length === 0 ? (
              <AiOutlineShoppingCart
                onClick={() => this.props.addToCart(this.props.jobInfo)}
              />
            ) : (
              <AiOutlineShoppingCart id='cartDisable'/>
            )}
            <RiArrowGoBackFill onClick={this.props.goToFindJob} />
          </ButtonsSection>
        </DetailsSection>
		</Border>
      </Section>
    );
  }
}
