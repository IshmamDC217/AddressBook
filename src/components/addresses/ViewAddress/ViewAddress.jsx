import React, { useEffect, useState } from 'react';
import { AddressService } from "../../../services/AddressService";
import {Link, useParams} from "react-router-dom";
import Loadingspin from '../../Loadingspin/Loadingspin';


let ViewAddress = () => {

    let {addressId} = useParams()

    const [state, setState] = useState({
        loading: false,
        address: {},
        errorMessage: '',
        group : {}
    });

    useEffect(() => {
        async function fetchData() 
        {
            try {
                setState({ ...state, loading: true });
                const response = await AddressService.getAddress(addressId);
                const groupResponse = await AddressService.getGroup(response.data);
                setState({
                    ...state,
                    loading: false,
                    address: response.data,
                    group: groupResponse.data
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
    }, [addressId]);

    let {loading, address, errorMessage, group} = state;
    return (
        <React.Fragment>
            <section className= "view-contact-intro">
                <div className= "container">
                    <div className= "row">
                        <div className="col">
                            <p className= "h4 text- fw-dark fst-italic p-3">View Address </p>
                            <p className= "fst-italic ms-3">Address Details</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Loadingspin/> : <React.Fragment>
                    {
                        Object.keys(address).length > 0 && Object.keys(group).length > 0 &&
                        <section className= "view-contact mt-3">
                        <div className= "container">
                            <div className= "row">
                                <div className="col md-4">
                                    {/* <img src={address.image} alt="" className="address-img"/> */}
                                    <img src={address.image} alt=""/>
                                </div>
                                <div className="col md-8">
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
                                                        <li className="list-group-item list-group-item-action">
                                                            Group : <span className="fw-bolder">{group.name}</span>
                                                        </li>
                                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link to={'/addresses/list'} className="btn btn-warning mt-1">Back</Link>
                                </div>
        
                            </div>
                        </div>
                    </section>
                    }
                </React.Fragment>
            }
            
        </React.Fragment>
    )
};
export default ViewAddress;