import React, { Component } from 'react'
import Picslide from '../components/Picslide'
import API from '../api/api'
import HotelCard from '../components/HotelCard'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            Hotel : []
        }
    }
    componentDidMount(){
        API.get('/management/getHotel')
        .then(res =>{
            if(res.data){
                this.setState({
                    Hotel : this.state.Hotel.concat(res.data)
                })
            }
            console.log(this.state.Hotel)
        })
    }
    render() {
        return (
            <div>
                <Picslide></Picslide>
                <div className="container mt-4">
                <div className="row">
                    {
                        this.state.Hotel.map((Hotels) =>{
                            return(
                                <div className="col-sm-4 col-12" key={Hotels._id}>
                                <HotelCard key={Hotels._id} name={Hotels.name}
                                details={Hotels.details} 
                                location={Hotels.location}
                                image={Hotels.picHead}></HotelCard>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        )
    }
}
