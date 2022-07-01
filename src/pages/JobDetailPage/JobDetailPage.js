import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { formatDate } from '../../constants/formatDate'
import { BASE_URL, headers } from '../../constants/url'
import { Button } from '@chakra-ui/react'
import { Section } from './Styled.js'
import { Flex } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ButtonSection = styled.section`
	display: flex;
	justify-content: space-evenly;
	margin-top: 30px;
`

export default class DetailPage extends React.Component {
	componentDidMount() {
		this.getJobs()
	}

	getJobs = () => {
		axios
			.get(`${BASE_URL}/jobs`, headers)
			.then((res) => {
				this.setState({
					jobsList: res.data.jobs,
					filteredJobsList: res.data.jobs,
				})
			})
			.catch((err) => {
				alert(err.response.data.message)
			})
	}

	render() {
		const status = this.props.listCart.filter((item) => {
			return item.id === this.props.jobInfo.id
		})

		const listResults = this.props.jobInfo.paymentMethods.map((pay, index) => (
			<li key={index}>{pay}</li>
		))

		return (
			<Section>
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
					<ButtonSection>
						<p>{this.props.jobInfo.title}</p>
						<p>R$ {this.props.jobInfo.price},00</p>
						<p>
							<strong>Prazo:</strong> {formatDate(this.props.jobInfo.dueDate)}
						</p>
						<p>{this.props.jobInfo.description}</p>
						<ul>
							<div>{listResults}</div>
						</ul>
						<Button colorScheme='purple' onClick={this.props.goToFindJobInfo}>
							Voltar para lista
						</Button>
						{status.length === 0 ? (
							<AiOutlineShoppingCart
								onClick={() => this.props.addToCart(this.props.jobInfo)}
							/>
						) : (
							<AiOutlineShoppingCart />
						)}
					</ButtonSection>
				</Flex>
			</Section>
		)
	}
}
