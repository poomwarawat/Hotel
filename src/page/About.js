import React, { Component } from 'react'


export default class About extends Component {
    render() {
        return (
            <div className="container p-4">
                <h1>About</h1>
                <div className="row">
                    <div className="col-sm-6 col-12 p-4">
                        <div className="picAbout">
                            <img src="https://q-cf.bstatic.com/images/hotel/max1024x768/181/181660540.jpg"></img>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12 p-4">
                        <h1>Travel Booking</h1>
                        <p>Travel Booking is a website for tourist who want to find someplace or hotel</p>
                        <hr></hr>
                        <p>Travel Booking very simple in hotel booking</p>                        
                        <p>Travel Booking is The most hotel list in website</p>
                    </div>
                </div>
            </div>
        )
    }
}
