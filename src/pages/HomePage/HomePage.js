import React from "react";
import styled from "styled-components";
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { theme } from "../../constants/theme";
import Ninja from '../../assets/img/ninja2.png'
import Logo from '../../assets/img/logoteste.png'


const Botoes = styled.section`
    display: flex;
    grid-template-rows: 1fr 1fr;
    grid-row: 1/2;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    margin-top: 50px;
    padding-bottom: 30px;
    
    h3 {
        font-size: 20px;
        font-weight: bold;

    }

    button {
        display: flex;
        width: 200px;
	    height: 40px;
        margin: 20px auto;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: white;
    }
`
const Section1 =styled.section`
    width: 100vw;
    height: 400px;
    border-top: 1px solid lightgrey;
    margin: 0 auto;
   justify-content: center;
   font-size: 20px;
   text-align: center;
   padding-top: 30px;
   `
const Section2 =styled.section`
    width: 100vw;
    height: 400px;
    background-color: #ff784f;
    color: white;
    border-top: 1px solid lightgrey;
    margin: 0 auto;
   justify-content: center;
   font-size: 20px;
   text-align: center;
   padding-top: 30px;
`
const Section3 =styled.section`
    width: 100vw;
    height: 400px;
    border-top: 1px solid lightgrey;
    margin: 0 auto;
   justify-content: center;
   font-size: 20px;
   text-align: center;
   padding-top: 30px;
`
const Section4 =styled.section`
    width: 100vw;
    height: 400px;
    border-top: 1px solid lightgrey;
    margin: 0 auto;
   justify-content: center;
   font-size: 20px;
   text-align: center;
   padding-top: 30px;
`

const Section0 = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
    padding-bottom: 30px;
    padding-top: 140px;

    h3 {
        display: grid;
        grid-row: 1/2;
        justify-self: center;
        align-self: center;
        color: #3e3740;
    }
    img {
        display: grid;
        grid-column: 2/3;
        justify-self: center;
        align-self: center;
        width:400px;
        
    }
`
export default class HomePage extends React.Component {
render(){
return(
    <div>
        <Section0>
            <img src={Logo}/>
            
            <Botoes>
                <h3> Torne sua vida mais rapida e pratica </h3>
                <h3>como um ninja</h3>
                <ChakraProvider theme={theme}>
                    <Button bg="brand.900" onClick = {this.props.goToFindJob}>Contrate um Ninja</Button>
                    <Button bg="brand.900" onClick = {this.props.goToCreatedJob}>Seja um Ninja</Button>
                </ChakraProvider>
            </Botoes>
        </Section0>
        <Section1>
            <h3>O que é a labeninja?</h3>
        </Section1>
        <Section2>
            <h3>Como funciona</h3>
        </Section2>
        <Section3>
            <h3>Parcerias Labeninja</h3>
        </Section3>
        <Section4>
            <h3>Quem contratou</h3>
        </Section4>
        
    </div>
)
}
}