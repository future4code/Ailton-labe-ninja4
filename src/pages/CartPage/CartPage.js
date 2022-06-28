import React from 'react';
import HomePage from '../HomePage/HomePage';
import { Button } from '@chakra-ui/react'

export default class CartPage extends React.Component {
render(){
return(
    <section>
            <div>Cart</div>
            <Button colorScheme='purple' onClick = {this.props.goToFindJob}>Volta para lista de serviços</Button>
            <Button colorScheme='purple'>Comprar serviços</Button>
                
        </section>
)
}
}