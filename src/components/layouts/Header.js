import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    renderLink = () =>{
        if(localStorage.getItem("auth-token")){
            return(
                <div>
                    <div className="btn-group">
                    <button type="button" className="btn btn-info dropdown-toggle btnsign" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {localStorage.getItem("email")}
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link to="/management_panel">
                            <button className="dropdown-item" type="button">Admin management</button>
                        </Link>
                        <button className="dropdown-item" type="button">Profile setting</button>
                        <button className="dropdown-item" onClick={this.handleSignOut}>Sign Out</button>
                    </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <Link to="/signin">
                        <button className="btn btn-info btnsign">Sign In</button>
                    </Link>
                </div>
            )
        }
    }
    handleSignOut = () =>{
        localStorage.removeItem("auth-token")
        this.props.history.push("/")
        window.location.reload()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand mt-3">Travel booking</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/'>
                        <p className="nav-link mt-3">Home</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'>
                            <p className="nav-link mt-3">About</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='contact'>
                            <p className="nav-link mt-3">Contact</p>
                        </Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {this.renderLink()}
                    </form>
                </div>
                </nav>
        )
    }
}
