import React from "react";
import styled from "styled-components";
import axios from "axios";
import { formatDate } from "../../constants/formatDate";
import { BASE_URL, headers } from "../../constants/url";
import { Button } from "@chakra-ui/react";

const Botoes = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

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

      const listResults = this.props.jobInfo.paymentMethods.map((pay, index) => <li key={index}>{pay}</li>)
      // let results = ''
      // for (const pay of this.props.jobInfo.paymentMethods) {
      //   console.log('22----', pay)
      //   results += <li>{pay}</li>
      // }
      // return results
    
    return (
      <Botoes>
        <p>{this.props.jobInfo.title}</p>
        <p>R$ {this.props.jobInfo.price},00</p>
        <p><strong>Prazo:</strong> {formatDate(this.props.jobInfo.dueDate)}</p>
        <p>{this.props.jobInfo.description}</p>
        <ul>
          <div>{listResults}</div>
        </ul>
        <Button colorScheme="purple" onClick={this.props.goToFindJob}>
          Voltar para lista
        </Button>
      </Botoes>
    );
  }
}
