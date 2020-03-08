import React, { Component } from 'react'
import API from '../api/api'
import BookingCard from '../components/BookingCard'

export default class Booking extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : {},
            type : ""
        }
    }
    componentWillMount(){
        const {id, type} = this.props.match.params
        API.post("/management/getHotel", {id})
        .then(res =>{
            this.setState({
                data : res.data[0],
                type : type
            })
        })
    }
    renderBooking = () =>{
        if(this.state.type === "smallRoom"){
            return(
                <BookingCard name={this.state.data.name} price={this.state.data.smallPrice} data={this.state.data.smallData} pic={this.state.data.smallPic}></BookingCard>
            )
        }else if(this.state.type === "middleRoom"){
            return(
                <BookingCard name={this.state.data.name} price={this.state.data.middlePrice} data={this.state.data.middleData} pic={this.state.data.middlePic}></BookingCard>
            )
        }else if(this.state.type === "largeRoom"){
            return(
                <BookingCard name={this.state.data.name} price={this.state.data.largePrice} data={this.state.data.largeData} pic={this.state.data.largePic}></BookingCard>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderBooking()}
            </div>
        )
    }
}
