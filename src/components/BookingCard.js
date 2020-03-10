import React, { Component } from 'react'
import Footer from '../components/layouts/Footer'
import API from '../api/api'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


export default class BookingCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : localStorage.getItem("email"),
            Hotel : this.props.name,
            Price : this.props.price,
            Detail : this.props.data,
            name : "",
            startDate: new Date(),
            endDate : new Date(),
            numDate : 1,
        }
    }
    handleClicked = () =>{
        const { startDate, endDate } = this.state
        if((endDate - startDate) === 0 ){
            alert("wrong your date")
        }else if(endDate - startDate < 0){
            alert("Wrong your date")
        }else{
            const totalPrice = this.state.Price * Math.abs(Math.ceil((this.state.endDate - this.state.startDate) / 86400000))
            const {Hotel, Price, Detail, email, name, startDate, endDate} = this.state
            API.post("/booking/addBooking", {Hotel, Price, Detail, email, name, startDate, endDate, totalPrice})
            .then(res => {
                if(res.data){
                    alert("Booking success")
                }
            })
        }
       
    }
    handleChange = (e) =>{
        const name = e.target.id
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }
    handleChangeDate = date => {
        this.setState({
          startDate: date,
        });
    };

    handleChangeEndDate  = date => {
        this.setState({
          endDate: date,
        });    
    };
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
                            <h4>Price : {this.props.price} baht / day</h4>
                            <div className="row">
                                <div className="col">
                                    <h4>Checkin</h4>
                                    <DatePicker
                                        className="form-control"
                                        selected={this.state.startDate}                                
                                        onChange={this.handleChangeDate}
                                    />
                                </div>
                                <div className="col">
                                    <h4>Checkout</h4>
                                    <DatePicker
                                        className="form-control"
                                        selected={this.state.endDate}                                
                                        onChange={this.handleChangeEndDate}
                                    />
                                </div>                                
                            </div>  
                            <h3>Total Price : {Math.abs(Math.ceil((this.state.endDate - this.state.startDate) / 86400000)) * this.state.Price} Baht.</h3>
                        </div>
                        <div className="col-12 mt-2">
                            <p className="mt-2">Note : <span><input type="text" id="name" className="form-control" onChange={this.handleChange}></input></span></p>
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
