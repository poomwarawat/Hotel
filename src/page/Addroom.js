import React, { Component } from 'react'

export default class Addroom extends Component {
    constructor(props){
        super(props)
        this.state={
            file : null,
            smallPic : null,
            smallPrice : null,
            smallData : null,
            middlePic : null,
            middlePrice : null,
            middleData : null,
            largePic : null,
            largePrice : null,
            largeData : null,
            name : "",
            details : "",
            location : ""
        }
    }

    renderRoom = () =>{
        if(this.state.smallPic !=null){
            return(
                <img src={this.state.smallPic} alt=""></img>
            )
        }
    }
    renderRoom2 = () =>{
        if(this.state.middlePic !=null){
            return(
                <img src={this.state.middlePic} alt=""></img>
            )
        }
    }
    renderRoom3 = () =>{
        if(this.state.largePic !=null){
            return(
                <img src={this.state.largePic} alt=""></img>
            )
        }
    }
    renderImg = () =>{
        if(this.state.file == null){
            return(
                <div></div>
            )
        }else{
            return(
                <img src={this.state.file} alt="..."></img>
            )
        }
    }
    handleClick = () =>{
        console.log(this.state)
    }
    handleChange = (e) =>{
        const name = e.target.id
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }
    onChanges = (e) =>{
        const name = e.target.name
        const value = e.target.files[0]
        this.setState({
            [name] : URL.createObjectURL(value)
        })
    }
    render() {
        return (
            <div>
                <div className="Addimg">
                    <div>
                        {
                            this.renderImg()
                        }
                    </div>
                    Upload Image : <input type="file" onChange={this.onChanges} name="file"></input>
                </div>
                <div className="container mt-4">
                    <h3>Hotel name </h3>
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Hotel name" id="name"></input><br></br>
                    <h3>Hotel details </h3>
                    <textarea className="form-control" onChange={this.handleChange} id="details" rows="10"></textarea><br></br>
                    <h3>Type room</h3>
                    <div className="row">
                        <div className="col-sm-4 col-12">
                            <div className="room">
                                <div>
                                    {this.renderRoom()}
                                </div>
                                <input type="file" onChange={this.onChanges} name="smallPic"></input>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="room">
                                <div>
                                    {this.renderRoom2()}
                                </div>
                                <input type="file" onChange={this.onChanges} name="middlePic"></input>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="room">
                                <div>
                                    {this.renderRoom3()}
                                </div>
                                <input type="file" onChange={this.onChanges} name="largePic"></input>
                            </div>
                        </div>
                        
                    </div><br></br>
                    <h3>Contact</h3>
                    <textarea className="form-control" onChange={this.handleChange} id="contact" row="5"></textarea><br></br>
                    <h3>Location</h3>
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="location" id="location"></input><br></br>
                    <button className="btn btn-primary w-100 mb-4" onClick={this.handleClick}>UPLOAD</button>
                </div>
            </div>
        )
    }
}