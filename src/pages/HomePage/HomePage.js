import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { theme } from "../../constants/theme";
import Logo from "../../assets/img/desenho.png";
import Footer from "../../components/Footer";
import { Container, Section, TwoButtons } from "./Styled";
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <img src={Logo} alt="Serviços" />
          <Container>
            <p>
              Torne sua vida <br /> rápida e prática <span>como um ninja.</span>
            </p>
            <ChakraProvider theme={theme}>
              <TwoButtons>
                <Button bg="brand.violet" onClick={this.props.goToFindJob}>
                  Contratar Serviço
                </Button>
                <Button bg="brand.violet" onClick={this.props.goToCreatedJob}>
                  Cadastrar Serviço
                </Button>
              </TwoButtons>
            </ChakraProvider>
          </Container>
        </Section>
        <Footer />
      </div>
    );
  }
}
