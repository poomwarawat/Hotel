import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header'
import {Route, Switch} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import SignIn from './page/SignIn'
import Register from './page/Register'
import PrivateRoute from './privateRoute'
import Management from './page/Management'
import Addroom from './page/Addroom'
import StatusRoom from './page/StatusRoom'
import Reviews from './page/Reviews'
import AdminRegister from './page/AdminRegister'
import HotelPage from './page/HotelPage'
import Booking from './page/Booking'
import Mybooking from './page/Mybooking'
import Footer from './components/layouts/Footer'
import NotFound from './page/NotFound'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
          <PrivateRoute path="/management_panel" component={Management} exact></PrivateRoute>
          <PrivateRoute path="/management_panel/addHotel" component={Addroom}></PrivateRoute>
          <PrivateRoute path="/management_panel/check_statusRoom" component={StatusRoom}></PrivateRoute>
          <PrivateRoute path="/management_panel/review_comment_view" component={Reviews}></PrivateRoute>
          <PrivateRoute path="/Mybooking" component={Mybooking}></PrivateRoute>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/admin_register" component={AdminRegister}></Route>
          <Route path="/hotel/:id" component={HotelPage} exact></Route>
          <PrivateRoute path="/hotel/:id/:type" component={Booking}></PrivateRoute>
          <Route path='*' component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
