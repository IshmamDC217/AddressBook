import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AddressService } from "../../../services/AddressService";
import Loadingspin from '../../Loadingspin/Loadingspin';


let AddressList = () => {

    const [state, setState] = useState({
        loading: false,
        addresses: [],
        errorMessage: ''
    });

    useEffect(() => {
        async function fetchData() 
        {
            try {
                setState({ ...state, loading: true });
                const response = await AddressService.getALLAddresses();
                setState({
                    ...state,
                    loading: false,
                    addresses: response.data
                })
            }
            catch(error) {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                });
            }
        }
        fetchData();
    }, []);



    let { loading, addresses, errorMessage } = state;

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(addresses)}</pre> */}
            <section className="address-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-white fw-bold">Address Manager
                                    <Link to={'/addresses/add'} className="btn btn-success ms-2">
                                        <i className="fa fa-plus me-2" />
                                        New</Link>

                                </p>
                                <p className="fst-lighter">Search for Addresses</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Search Name(s)" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-outline-dark" value="Search" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Loadingspin /> : <React.Fragment>
                    <section className="address-list">
                        <div className="container">
                            <div className="row">
                                {
                                    addresses.length > 0 &&
                                    addresses.map(address => {
                                        return (
                                            <div className="col-md-6" key={address.id}>
                                                <div className="card my-2">
                                                    <div className="card-body">
                                                        <div className="row align-items-center j-flex justify-content-around">
                                                            <div className="col-md-4">
                                                                <img src={address.image} alt="" className="address-img" />
                                                            </div>
                                                            <div className="col-md-7">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item list-group-item-action">
                                                                        First Name : <span className="fw-bolder">{address.first_name}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Last Name : <span className="fw-bolder">{address.last_name}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Mobile : <span className="fw-bolder">{address.phone}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Email : <span className="fw-bolder">{address.email}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                                <Link to={'/addresses/view/addressID'} className="btn btn-primary my-1">
                                                                    <i className="fa fa-eye" />
                                                                </Link>
                                                                <Link to={'/addresses/edit/addressID'} className="btn btn-warning my-1">
                                                                    <i className="fa fa-pen" />
                                                                </Link>
                                                                <button className="btn btn-danger my-1">
                                                                    <i className="fa fa-trash" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            }


        </React.Fragment>
    )
};
export default AddressList;