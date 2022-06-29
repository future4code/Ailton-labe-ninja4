import React from "react"
import JobCard from "../../components/JobCard/JobCard"
import axios from "axios"
import { BASE_URL, headers } from '../../constants/url'
import styled from "styled-components"

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 12px;
`
const Filters = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    input{
        display: inline;
        border: 1px solid black; 
        width: 300px;
    }
    select {
        border: 1px solid black; 
        width: 300px;
    }
`
export default class FindJobPage extends React.Component {
    state = {
        jobsList: [],
        filteredJobsList: [],
        title: "",
        valueMin: "",
        valueMax: "",
        order: "",
    }
    
    componentDidMount() {
        this.getJobs()
        this.filterJobs()
    }

    handleValueMin = (event) => {
        this.setState({valueMin: event.target.value})
        this.filterJobs()
    }

    handleValueMax = (event) => {
        this.setState({valueMax: event.target.value})
        this.filterJobs()
    }

    handleTitle = (event) => {
        this.setState({title: event.target.value})
        this.filterJobs()
    }

    handleOrder = (event) => {
        this.setState({order: event.target.value})
        this.filterJobs()
        console.log(event.target.value)
    }

    getJobs = () => {
        axios.get(`${BASE_URL}/jobs`, headers)
            .then((res) => {
                this.setState({ jobsList: res.data.jobs, filteredJobsList: res.data.jobs })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    filterJobs = () => {
       
    }

    render() {  
        const minimum = Number(this.state.valueMin) ? Number(this.state.valueMin) : 0
        const maximum = Number(this.state.valueMax) ? Number(this.state.valueMax) : 100000
        console.log(minimum)
        const newList = this.state.jobsList
            .filter((job) => job.price >= minimum)
            .filter((job) => job.price <= maximum)
            .filter((job) => {
                const title = job.title.toLowerCase()
                const search = this.state.title.toLowerCase()
                return title.includes(search)
            })
            .sort((a, b) => {


                switch (this.state.order) {
                case "Menor Valor":
                    return a.price - b.price
                case "Maior Valor":
                    return b.price - a.price 
                    case "Titulo":
                    return a.title.localeCompare(b.title)
                    case "Prazo":
                        return a.dueDate.localeCompare(b.dueDate)
                    default:
                        return ""
                }
            })

        const jobComponents = newList.map((job) => {
            return <JobCard key={job.id} job={job} goToDetailPage={this.props.goToDetailPage} addToCart={this.props.addToCart}/>
        })

        return (
            <div>
                <Filters>
                    <input 
                    type="text"
                    value={this.state.title} 
                    onChange={this.handleTitle} 
                    placeholder="Titulo"/>
                    <input 
                    type="number"
                    value={this.state.valueMin} 
                    onChange={this.handleValueMin} 
                    placeholder="Valor Mínimo"/>
                    <input 
                    type="number"
                    value={this.state.valueMax} 
                    onChange={this.handleValueMax} 
                    placeholder="Valor Máximo"/>
                    <select 
                    value={this.state.order} 
                    onChange={this.handleOrder}>
                        <option value={'Sem Ordenacao'}>Sem Ordenação</option>
                        <option value={'Menor Valor'} >Menor Valor</option>
                        <option value={'Maior Valor'}>Maior Valor</option>
                        <option value={'Titulo'} >Título</option>
                        <option value={'Prazo'} >Prazo</option>
                    </select>
                </Filters>

                <CardsContainer>
                    {jobComponents}
                </CardsContainer>
            </div>
        )
    }
}
