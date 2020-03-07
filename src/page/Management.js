import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Management extends Component {
    render() {
        return (
            <div className="container p-4 text-center">
                <h1>Management panel</h1>
                <div className="row mt-4">
                    <div className="col-12 col-sm-4 mt-4">
                        <div className="card">
                            <div className="manage_img">
                                <img src="https://www.schengenvisainfo.com/wp-content/uploads/2016/06/Proof-of-Hotel-Booking-for-Visa-Application.jpg" className="card-img-top" alt="..."></img>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text">เพิ่มห้องพักในโรงแรมของคุณ</p>
                                <Link to="/management_panel/addHotel">
                                    <button className="btn btn-primary">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 mt-4">
                        <div className="card">
                            <div className="manage_img">
                                <img src="https://cdn.sendx.io/prod/upload/img/18/10/29/56/6449/full.jpg" className="card-img-top" alt="..."></img>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text">ตรวจสอบสถานะการจองห้องพัก</p>
                                <Link to="/management_panel/check_statusRoom">
                                    <button className="btn btn-primary">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 mt-4">
                        <div className="card">
                            <div className="manage_img">
                                <img src="https://miro.medium.com/max/4000/1*-1b3wqGdN8OwnUC5CscdtA.jpeg" className="card-img-top" alt="..."></img>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text">อ่านรีวิวและคอมเมนต์</p>
                                <Link to="/management_panel/review_comment_view">
                                    <button className="btn btn-primary">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
