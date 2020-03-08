import React, { Component } from 'react'
import Footer from '../components/layouts/Footer'
import API from '../api/api'

export default class StatusRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            Booking : [],
            Hotel : ""
        }
        const userEmail = localStorage.getItem("email")
        API.post("/management/listHotelnames", {userEmail})
        .then(res => {
            this.setState({
                Hotel : res.data.name
            })
        })
    }
    componentDidUpdate(){
        const { Hotel } = this.state
        API.post("/booking/searchHotel", {Hotel})
        .then(res => {
            if(res.data){
                this.setState({
                    Booking : res.data
                })
            }
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="roomstatus">
                        <h1>Room status</h1>
                        <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Details</th>
                            <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.Booking.map(datas =>{
                                return(
                                    <tr key={datas._id}>
                                        <th scope="row">{datas.Name}</th>
                                        <td>{datas.Email}</td>
                                        <td>{datas.Details}</td>
                                        <td>{datas.Date}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                        </table> 
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
