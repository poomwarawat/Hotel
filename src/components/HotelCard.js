import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HotelCard extends Component {
    constructor(props){
        super(props)
        console.log(this.props.data)
    }
    render() {
        return (
            <div>
                <div className="card">
                <div className="cardImage">
                    <img src={this.props.image} alt="Hotelpic"></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.details}.</p>
                    <Link to={`/hotel/${this.props.data._id}`}>
                        <button className="btn btn-primary" id={this.props.data._id}>View details</button>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}
