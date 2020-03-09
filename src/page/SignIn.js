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
    componentDidMount(){
        if(localStorage.getItem("auth-token")){
            this.props.history.push("/")
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
                localStorage.setItem("auth-status", res.data.users.status)
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
            <div className="SignIn">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-12 sign">
                            <div className="signinbox">
                                <h1>SignIn</h1>
                                <p>Email</p>
                                <input required type="text" name="email" placeholder="Enter your email" className="form-control" onChange={this.handleChange}></input>
                                <p className="mt-2">Password</p>
                                <input required type="password" name="password" placeholder="Enter your password" className="form-control" onChange={this.handleChange}></input><br></br>
                                <button className="btn btn-primary w-100" onClick={this.handleClick}>SignIn</button>
                            </div><br></br>
                            <div className="float-left">
                                <Link to='/register'>
                                    <p>Create Account.</p>
                                </Link>
                            </div><br></br>
                            <div className="errmsg">
                                <p>{this.state.error}</p>
                            </div>
                        </div>
                        <div className="col-sm-8 col-12">
                            <div className="spaceCreate">
                            <div className="jumbotron">
                                <h3>Create your hotel on Travel Booking</h3>
                                <p className="lead">The best Hotel booking in Thailand</p>
                                <p className="lead">More then 10 million users</p>                        
                                <p className="lead">Easy to payment</p>
                                <hr className="my-4"></hr>                                                             
                                <Link to="/admin_register" className="float-right">
                                    <button className="btn btn-primary mt-4">Join with us</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn