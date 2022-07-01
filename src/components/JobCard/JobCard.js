import React from 'react'
import styled from 'styled-components'
import { formatDate } from '../../constants/formatDate'
import { Flex, Button } from '@chakra-ui/react'

const Card = styled.div`
	border: 1px solid black;
	padding: 15px;
	margin: 12px;
`
export default class JobCard extends React.Component {
	render() {
		const status = this.props.listCart.filter((item) => {
			return item.id === this.props.job.id
		})
		return (
			<Flex
				borderRadius='10px'
				border='1px'
				borderColor='purple.700'
				bg='purple.200'
				minW='250px'
				gap='10px'
				direction='column'
				m='5px'
				p='15px'
			>
				<Card>
					<h3>{this.props.job.title}</h3>
					<p>
						<strong>Preço:</strong> R$ {this.props.job.price},00
					</p>
					<p>
						<strong>Prazo:</strong> {formatDate(this.props.job.dueDate)}
					</p>
					<Button onClick={() => this.props.goToDetailPage(this.props.job)}>
						Ver detalhes
					</Button>
					{/* <Button onClick={() => this.props.addToCart(this.props.job)}>Adicionar no Carrinho</Button> */}
					{status.length === 0 ? (
						<Button onClick={() => this.props.addToCart(this.props.job)}>
							Adicionar no Carrinho
						</Button>
					) : (
						<p>testeButao</p>
					)}
				</Card>
			</Flex>
		)
	}
}
