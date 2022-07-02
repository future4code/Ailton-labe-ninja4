import React from 'react'
import styled from 'styled-components'
import { formatDate } from '../../constants/formatDate'
import { Flex, Button } from '@chakra-ui/react'
import {BsInfoCircle} from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Card = styled.div`
	border: 1px solid black;
	padding: 15px;
	margin: 12px;
	text-align: center;

	h2{
		font-weight: bold;
		padding-bottom: 0.2rem;
	}
`

const CardButtons = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 0.6rem;
	font-size: 1.6rem;
#cartDisable{
	color:grey;
}
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
					<h2>{this.props.job.title}</h2>
					<p>
						<strong>Preço:</strong> R$ {this.props.job.price},00
					</p>
					<p>
						<strong>Prazo:</strong> {formatDate(this.props.job.dueDate)}
					</p>
					<CardButtons>
					<BsInfoCircle onClick={() => this.props.goToDetailPage(this.props.job)}/>
					{status.length === 0 ? (
						<AiOutlineShoppingCart onClick={() => this.props.addToCart(this.props.job)}/>
					) : (
						<AiOutlineShoppingCart id='cartDisable'/>
					)}
					</CardButtons>
				</Card>
			</Flex>
		)
	}
}
