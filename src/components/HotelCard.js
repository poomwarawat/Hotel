import React, { Component } from 'react'

export default class HotelCard extends Component {
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
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
                </div>
            </div>
        )
    }
}
