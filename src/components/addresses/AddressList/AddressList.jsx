import React from 'react';
import{Link} from 'react-router-dom';

let AddressList = () => {
    return (
        <React.Fragment>
            <section className="address-search p-3">
                <div className="container">
                    <div className= "grid">
                        <div className= "row">
                            <div className= "col">
                                <p className= "h3">Address Manager 
                                <Link to={'/addresses/add'}className="btn btn-success ms-2">
                                    <i className="fa fa-plus me-2"/>
                                    New</Link>

                                </p>
                                <p className= "fst-lighter">Addresses of Clients</p>
                            </div>                             
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Search Name(s)"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </section>

            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <img src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png" alt="" className= "address-img"/>
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list group">
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
                                        <div className="col-md-1">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        </React.Fragment>
    )
};
export default AddressList;