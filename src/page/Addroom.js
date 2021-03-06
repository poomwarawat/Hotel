import React, { Component } from 'react'
import firebase from 'firebase'
import { Progress } from 'reactstrap';
import API from '../api/api'

export default class Addroom extends Component {
    constructor(props){
        super(props)
        this.state={
            file : null,
            smallPic : null,
            smallPrice : null,
            smallData : null,
            smallPicPer : null,
            middlePic : null,
            middlePrice : null,
            middleData : null,
            middlePicPer : null,
            largePic : null,
            largePrice : null,
            largeData : null,
            largePicPer : null,
            name : "",
            details : "",
            location : "",
            userEmail : localStorage.getItem("email"),
            messag : "",
            showAdd : "",
            showHotel : "none",
            loadHotel : []
        }
        var firebaseConfig = {
            apiKey: "AIzaSyBYnithf7NH2J6LuUI6JXPkw84v2bdqRWg",
            authDomain: "hotel-90db9.firebaseapp.com",
            databaseURL: "https://hotel-90db9.firebaseio.com",
            projectId: "hotel-90db9",
            storageBucket: "hotel-90db9.appspot.com",
            messagingSenderId: "624144125372",
            appId: "1:624144125372:web:18d1e857e5d32eb328efb9"
          };
          // Initialize Firebase
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }
    }
    componentDidMount(){
        API.post('/management/listHotelnames', this.state)
        .then(res => {
            if(res.data){
                this.setState({
                    loadHotel : this.state.loadHotel.concat(res.data),
                    showAdd : "none",
                    showHotel : ""
                })
            }
        })
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
        API.post("/management/uploadHotelData", this.state)
        window.location.reload()
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

        const storageRef = firebase.storage().ref(`${this.state.userEmail}/${name}`);
        const task = storageRef.put(value)

        task.on(`state_changed` , (snapshort) => {
            const namePer = name+"Per"
            let percentage = (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
            this.setState({
                [namePer] : percentage
            })
        } , (error) => {
            this.setState({
                messag:`Upload error : ${error.message}`
            })
        } , () => {
            this.setState({
                messag:`Upload Success`,
            })
            task.snapshot.ref.getDownloadURL().then((downloadUrl) =>{
                this.setState({
                    [name] : downloadUrl
                })
            })
        })        
    }
    handleDelete = () =>{
        const {userEmail} = this.state 
        API.post("/management/deletePost", {userEmail})
        .then(res => {
            if(res){
                alert("Deleted")
                window.location.reload()
            }
        })
    }
    render() {
        const ShowAdd = {
            display : this.state.showAdd
        }
        const ShowHotel = {
            display : this.state.ShowHotel
        }
        return (
            <div>
                <div className="container">
                <div style={ShowAdd}>
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
                            <Progress className="mt-2 mb-2" color="info" value={this.state.smallPicPer} />
                            <p>Price</p>
                            <input type="text" className="form-control" onChange={this.handleChange} id="smallPrice" placeholder="room price(Baht)"></input>
                            <p>Details</p>
                            <input type="text" className="form-control" onChange={this.handleChange} id="smallData" placeholder="room details"></input>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="room">
                                <div>
                                    {this.renderRoom2()}
                                </div>
                                <input type="file" onChange={this.onChanges} name="middlePic"></input>
                            </div>
                            <Progress className="mt-2 mb-2" color="info" value={this.state.middlePicPer} />
                            <p>Price</p>
                            <input type="text" className="form-control" onChange={this.handleChange} id="middlePrice" placeholder="room price(Baht)"></input>
                            <p>Details</p>
                            <input type="text" className="form-control" onChange={this.handleChange} id="middleData" placeholder="room details"></input>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="room">
                                <div>
                                    {this.renderRoom3()}
                                </div>
                                <input type="file" onChange={this.onChanges} name="largePic"></input>
                            </div>
                            <Progress className="mt-2 mb-2" color="info" value={this.state.largePicPer} />
                            <p>Price</p>
                            <input type="text" className="form-control" onChange={this.handleChange} id="largePrice" placeholder="room price(Baht)"></input>
                            <p>Details</p>
                            <input type="text" className="form-control" onChange={this.handleChange} id="largeData" placeholder="room details"></input>
                        </div>
                        
                    </div><br></br>
                    <h3>Contact</h3>
                    <textarea className="form-control" onChange={this.handleChange} id="contact" row="5"></textarea><br></br>
                    <h3>Location</h3>
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="location" id="location"></input><br></br>
                    <button className="btn btn-primary w-100 mb-4" onClick={this.handleClick}>UPLOAD</button>
                </div>
            </div>
            <div style={ShowHotel}>
                {
                    this.state.loadHotel.map((datas) =>{
                        return(
                            <div className="MyRoom" key={datas._id}>
                                <div className="row">
                                    <div className="col-sm-5 col-12 mt-2">
                                        <div className="boximg">
                                            <img className="w-100" alt="HotelPicture" src={datas.picHead}></img>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 col-12 mt-2 ">
                                        <h3>Hotel name : {datas.name}</h3>
                                        <p>Details : {datas.details}</p>
                                        <p>Contact : {datas.contact}</p>
                                        <p>Location : {datas.location}</p>
                                        <p>Create post : {datas.Create}</p>
                                        <button onClick={this.handleDelete} className="btn btn-danger ml-2">Delete data</button>
                                    </div>
                                    <div className="col-sm-3 col-12 mt-4 room">
                                        <p>Small room</p>
                                        <img src={datas.smallPic} alt="smallroom" className="mb-2"></img>
                                        <p>Price : {datas.smallPrice}</p>
                                        <p>Details : {datas.smallData}</p>
                                    </div>
                                    <div className="col-sm-3 col-12 mt-4 room">
                                        <p>Middle room</p>
                                        <img src={datas.middlePic} alt="middleroom" className="mb-2"></img>
                                        <p>Price : {datas.middlePrice}</p>
                                        <p>Details : {datas.middleData}</p>
                                    </div>
                                    <div className="col-sm-3 col-12 mt-4 room">
                                        <p>Large room</p>
                                        <img src={datas.largePic} alt="largeroom" className="mb-2"></img>
                                        <p>Price : {datas.largePrice}</p>
                                        <p>Details : {datas.largeData}</p>
                                    </div>
                                </div>
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
