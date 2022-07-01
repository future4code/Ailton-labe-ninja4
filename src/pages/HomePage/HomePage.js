import React from "react";
import styled from "styled-components";
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { theme } from "../../constants/theme";
import Ninja from '../../assets/img/ninja2.png'
import Logo from '../../assets/img/desenho.png'
import Footer from "../../components/Footer";


const Botoes = styled.section`
    display: flex;
    grid-template-rows: 1fr 1fr;
    grid-row: 1/2;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    margin-top: 50px;
    /* padding-bottom: 30px; */
    
    
    p {
        font-size: 3rem;
        font-weight: bold;
        text-align: justify;
        
    }

    button {
        display: flex;
        width: 160px;
	    height: 40px;
        margin: 20px auto;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        color: white;
    }
`

const TwoButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const Section0 = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
    padding-bottom: 30px;
    padding-top: 10px;
    max-width: 95%;
    margin: 0 auto;

    p {
        display: grid;
        grid-row: 1/2;
        justify-self: center;
        align-self: center;
        color: #450059;
        line-height: 110% ;
    }

    span {
        color:#FF784F;
    }
    img {
        display: flex;
        grid-column: 2/3;
        justify-self: start;
        /* align-self: flex-start; */
        width:550px;
        /* padding-right: 30px; */
        
    }
`
export default class HomePage extends React.Component {
render(){
return(
    <div>
         <Section0>
            <img src={Logo}/>
            
            <Botoes>
                <p >Torne sua vida  <br/> rápida e prática <span>como um ninja.</span></p>
                <ChakraProvider theme={theme}>
                    <TwoButtons>
                    <Button bg="brand.violet" onClick = {this.props.goToFindJob}>Contrate um Ninja</Button>
                    <Button bg="brand.violet" onClick = {this.props.goToCreatedJob}>Seja um Ninja</Button>
                    </TwoButtons>
                </ChakraProvider>
            </Botoes>
        </Section0>
    
        <Footer/>
    </div>
)
}
}