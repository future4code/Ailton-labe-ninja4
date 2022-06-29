import React from "react";


export default class Cart extends Component {
  render() {
    return (
        <div>
        <h3>{this.props.job.title}</h3>
        <p><b>Preço:</b> R${this.props.job.price}</p>
        <button>Remover</button>
        </div>
    )
  }
}
