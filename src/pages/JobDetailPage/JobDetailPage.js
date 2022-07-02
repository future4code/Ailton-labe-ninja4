import React from "react";
import axios from "axios";
import { formatDate } from "../../constants/formatDate";
import { BASE_URL, headers } from "../../constants/url";
import { Section } from "./Styled.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { DetailsSection, ButtonsSection, Border } from './Styled'



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
