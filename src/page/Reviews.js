import React, { Component } from 'react'
import API from '../api/api'

export default class Reviews extends Component {
    constructor(props){
        super(props)
        this.state = {
            review : []
        }
    }
    componentDidMount(){
        const userEmail = localStorage.getItem("email")
        API.post('/management/listHotelnames', {userEmail})
        .then(res => {
            if(res.data){
                const hotelID = res.data._id
                API.post("/review/getReview", {hotelID})
                .then(res => {
                    if(res.data){
                        this.setState({
                            review : this.state.review.concat(res.data)
                        })
                    }
                })
            }
        })
    }
    render() {
        return (
            <div className="container p-4" style={{overflowX:"auto"}}>
                <h1>Reviews</h1>
                <div>
                <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Hotel name</th>
                    <th scope="col">Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.review.map((datas) =>{
                            return(
                                <tr key={datas._id}>
                                    <th scope="row">{datas.email}</th>
                                    <td>{datas.hotelName}</td>
                                    <td>{datas.review}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                </div>
            </div>
        )
    }
}
