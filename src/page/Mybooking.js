import React, { Component } from 'react'
import API from '../api/api'

export default class Mybooking extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : localStorage.getItem("email"),
            mybook : []
        }
    }
    componentDidMount(){
        const {email} = this.state
        API.post("/booking/search", {email})
        .then(res => {
            if(res.data){
                this.setState({
                    mybook : this.state.mybook.concat(res.data)
                })
            }
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="Mybooking">
                    <h1>My booking</h1>
                    {console.log(this.state.mybook)}
                    <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Hotel</th>
                        <th scope="col">Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">Email</th>
                        <th scope="col">Note</th>
                        <th scope="col">Checkin</th>
                        <th scope="col">Checkin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.mybook.map((datas) =>{
                                return(
                                    <tr key={datas._id}>
                                        <th scope="row">{datas.Hotel}</th>
                                        <td>{datas.Details}</td>
                                        <td>{datas.Price}</td>
                                        <td>{datas.Email}</td>
                                        <td>{datas.Name}</td>
                                        <td>{datas.StartDate}</td>
                                        <td>{datas.EndDate}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                    <div>
                        
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
