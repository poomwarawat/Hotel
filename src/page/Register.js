import React, { Component } from 'react'
import API from '../api/api'

export default class Register extends Component {
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
        API.post('/user/register', {name, lastname, birth, email, password, repassword})
        .then(res =>{
            if(res.ok){
                alert("Register is success")
                return res
            }else{
                this.setState({ error : res.data})
            }
        })
        .catch( err => this.setState({error : err}))
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <p>name</p>
                <input required type="text" name="name" className="form-control" onChange={this.handleChange}></input>
                <p>lastname</p>
                <input required type="text" name="lastname" className="form-control" onChange={this.handleChange}></input>
                <p>birth day</p>
                <input required type="date" name="birth" className="form-control" onChange={this.handleChange}></input>
                <p>email</p>
                <input required type="email" name="email" className="form-control" onChange={this.handleChange}></input>
                <p>password</p>
                <input required type="password" name="password" className="form-control" onChange={this.handleChange}></input>
                <p>re-password</p>
                <input required type="password" name="repassword" className="form-control" onChange={this.handleChange}></input>
                {this.state.error}
                <button className="btn btn-primary" onClick={this.handleClick}>Sign Up</button>
            </div>
        )
    }
}
