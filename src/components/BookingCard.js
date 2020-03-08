import React, { Component } from 'react'
import Footer from '../components/layouts/Footer'
import API from '../api/api'

export default class BookingCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : localStorage.getItem("email"),
            Hotel : this.props.name,
            Price : this.props.price,
            Detail : this.props.data,
            name : ""
        }
    }
    handleClicked = () =>{
        API.post("/booking/addBooking", this.state)
        .then(res => {
            if(res.data){
                alert("Booking success")
            }
        })
    }
    handleChange = (e) =>{
        const name = e.target.id
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-sm-6 col-12 mt-2">
                            <div className="bookingImg">
                                <img src={this.props.pic} alt=""></img>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 mt-2">
                            <h4>Hotel name : {this.props.name}</h4>
                            <h4>Detail : {this.props.data}</h4>
                            <h4>Price : {this.props.price}</h4>
                            <p>Name : <span><input type="text" id="name" className="form-control" onChange={this.handleChange}></input></span></p>
                            <button className="btn btn-primary w-100" onClick={this.handleClicked}>Book now</button>
                        </div>
                    </div>
                    <div className="help">
                        Suggestion : After your booking. You can check "Your Booking" in my booking menu
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
