import React from 'react';
import {Link} from "react-router-dom";

let ViewAddress = () => {
    return (
        <React.Fragment>
            <section className= "view-contact-intro">
                <div className= "container">
                    <div className= "row">
                        <div className="col">
                            <p className= "h4 text-white fw-dark fst-italic">View Address</p>
                            <p className= "fst-italic">Address Details</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className= "view-contact mt-3">
                <div className= "container">
                    <div className= "row">
                        <div className="col md-4">
                            <img src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png" alt=""/>
                            {/* <img src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png" alt="" className="address-img"/> */}
                        </div>
                        <div className="col md-8">
                        <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                    First Name : <span className="fw-bolder">Tom</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Last Name : <span className="fw-bolder">Holland</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Mobile : <span className="fw-bolder">+8801738107100</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Email : <span className="fw-bolder">tomhollandisspiderman@gmail.com</span>
                                                </li>
                                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/addresses/list'} className="btn btn-warning">Back</Link>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ViewAddress;