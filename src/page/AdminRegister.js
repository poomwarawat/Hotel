import React, { Component } from 'react'
import API from '../api/api'

export default class AdminRegister extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            lastname : "",
            birth : "",
            email : "",
            password : "",
            repassword : "",
            error : ""
        }
    }
    componentDidMount(){
        if(localStorage.getItem("auth-token")){
            this.props.history.push("/")
        }
    }
    handleChange = (e) =>{
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name] : value
        })
    }
    handleClick = (e) =>{
        const {name, lastname, birth, email, password, repassword } = this.state
        e.preventDefault()
        API.post('/user/Admin_register', {name, lastname, birth, email, password, repassword})
        .then(res =>{
            if(res){
                alert("Register is success")
                this.props.history.push('/')
                return res
            }else{
                this.setState({ error : res.data})
            }
        })
        .catch( err => console.log(err))
    }
    render() {
        return (
            <div className="register">
                <div className="container">
                    <h1>Admin Register</h1>
                   <div className="row">                       
                       <div className="col-sm-4 col-12">
                            <p>name</p>
                            <input required type="text" name="name" placeholder="Enter your name" className="form-control" onChange={this.handleChange}></input>
                       </div>
                       <div className="col-sm-4 col-12">
                            <p>lastname</p>
                            <input required type="text" name="lastname" className="form-control" placeholder="Enter your lastname" onChange={this.handleChange}></input>
                       </div>
                       <div className="col-sm-4 col-12">
                            <p>birth day</p>
                            <input required type="date" name="birth" className="form-control" onChange={this.handleChange}></input>
                       </div>
                   </div>
                    <p>email</p>
                    <input required type="email" name="email" placeholder="Enter your email" className="form-control" onChange={this.handleChange}></input>
                    <p>password</p>
                    <input required type="password" name="password" className="form-control" placeholder="Enter your password" onChange={this.handleChange}></input>
                    <p>re-password</p>
                    <input required type="password" name="repassword" className="form-control" placeholder="Enter your re-password" onChange={this.handleChange}></input><br></br>
                    <p>
                        {this.state.error}
                    </p>
                    <button className="btn btn-primary w-100" onClick={this.handleClick}>Sign Up</button>
                </div>
            </div>
        )
    }
}
