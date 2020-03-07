import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import API from '../api/api'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : "",
            error : ""
        }
    }
    handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }
    handleClick = (e) =>{
        e.preventDefault()
        const { email, password} = this.state
        API.post('/user/login', {email, password})
        .then(res => {
            if(res.data.name === "tokenname"){
                console.log(res.data)
                localStorage.setItem("email", res.data.users.email)
                localStorage.setItem("auth-token", res.data.value)
                this.props.history.push('/')
                window.location.reload()
            }else{
                this.setState({
                    error : res.data
                })
            }
        })
    }
    render() {
        return (
            <div>
                <h1>SignIn</h1>
                <div className="container">
                    <p>Email</p>
                    <input required type="text" name="email" className="form-control" onChange={this.handleChange}></input>
                    <p>Password</p>
                    <input required type="password" name="password" className="form-control" onChange={this.handleChange}></input>
                    <button className="btn btn-primary" onClick={this.handleClick}>SignIn</button>
                </div>
                <Link to='/register'>
                    <p>Register</p>
                </Link>
                {this.state.error}
            </div>
        )
    }
}

export default SignIn