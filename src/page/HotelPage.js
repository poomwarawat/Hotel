import React, { Component } from 'react'
import API from '../api/api'
import Footer from '../components/layouts/Footer'
import {Link} from 'react-router-dom'

export default class HotelPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : {},
            smallRoom : "smallRoom",
            middleRoom : "middleRoom",
            largeRoom : "largeRoom"
        }
    }
    componentWillMount(){
        const {id} = this.props.match.params
        API.post("/management/getHotel", {id})
        .then(res => {
            this.setState({
                data : res.data[0]
            })
        })
    }
    render() {
        return (
            <div>
                <div className="imgHotel">
                    <img src={this.state.data.picHead} alt="Hotel"></img>
                </div>
                <div className="container p-4">
                    <h1>{this.state.data.name}</h1>
                    <hr></hr>
                    <h4>Details</h4>
                    <ul>
                        <li>{this.state.data.details}</li>
                    </ul>
                    <h4>Location</h4>
                    <ul>
                        <li>{this.state.data.location}</li>
                    </ul>
                    <h4>Contact</h4>
                    <ul>
                        <li>{this.state.data.contact}</li>
                        <li>{this.state.data.email}</li>
                    </ul>
                    <p>Create post : {this.state.data.Create}</p>
                    <hr></hr>
                    {console.log(this.state.data)}
                        <div className="row">
                            <div className="col-sm-4 col-12 mt-2">
                                <h4>Small room</h4>
                                <div className="room">
                                    <img src={this.state.data.smallPic} alt="smallRoom"></img>
                                    <hr></hr>
                                    <p>Price : {this.state.data.smallPrice}</p>
                                    <p>Details : {this.state.data.smallData}</p>
                                    <Link to={`/hotel/${this.state.data._id}/${this.state.smallRoom}`}>
                                        <button className="btn btn-primary w-100" id="smallroom">Booking</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-4 col-12 mt-2">
                                <h4>Middle room</h4>
                                <div className="room">
                                    <img src={this.state.data.middlePic} alt="middleRoom"></img>
                                    <hr></hr>
                                    <p>Price : {this.state.data.middlePrice}</p>
                                    <p>Details : {this.state.data.middleData}</p>
                                    <Link to={`/hotel/${this.state.data._id}/${this.state.middleRoom}`}>
                                        <button className="btn btn-primary w-100" id="middleroom">Booking</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-4 col-12 mt-2">
                                <h4>Large room</h4>
                                <div className="room">
                                    <img src={this.state.data.largePic} alt="largeRoom"></img>
                                    <hr></hr>
                                    <p>Price : {this.state.data.largePrice}</p>
                                    <p>Details : {this.state.data.largeData}</p>
                                    <Link to={`/hotel/${this.state.data._id}/${this.state.largeRoom}`}>
                                        <button className="btn btn-primary w-100" id="largeroom">Booking</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
