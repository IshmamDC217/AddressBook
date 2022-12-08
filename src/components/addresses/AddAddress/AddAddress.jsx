import React, { useEffect, useState } from 'react';
import { AddressService } from "../../../services/AddressService";
import {Link, useNavigate} from "react-router-dom";
import Loadingspin from '../../Loadingspin/Loadingspin';


let AddAddress = () => {

    let navigate = useNavigate();

    const [state, setState] = useState({
        loading: false,
        address: {
            first_name : '',
            last_name : '',
            phone : '',
            email : '',
            image : '',
            groupID : ''

        },
        groups : [],
        errorMessage: ''

    });

    let updateInput = (event) =>{
        setState({
            ...state,
            address: {
                ...state.address,
                [event.target.name] : event.target.value
            }
        })
    }

    useEffect(() => {
        async function fetchData() 
        {
            try {
                setState({ ...state, loading: true });
                const response = await AddressService.getGroups();
                setState({
                    ...state,
                    loading: false,
                    groups: response.data
                })
            }
            catch(error) {
                
            }
        }
        fetchData();
    }, []);

    let submitForm = async (event) => {
        // async function fetchData()
        // { 
            event.preventDefault();
            try {
                const response = await AddressService.createContact(state.address);
                if(response){
                    navigate('/addresses/list', {replace:true});
                }

            } 
            catch (error) {
                    setState({...state, errorMessage: error.message});
                    navigate('/addresses/add', {replace:false})
            }
       // }
       // fetchData();
    };

    let { loading, address, groups, errorMessage } = state;
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.address)}</pre> */}
            <section className= "add-address p-3">
                <div className= "container">
                    <div className= "row">
                        <div className="col">
                            <p className= "h4 text- fw-dark fst-italic">Create Contact</p>
                            <p className= "fst-italic">Add a new contact to your Address Book</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input
                                        required={true} 
                                        name="first_name"
                                        value={address.first_name}
                                        onChange = {updateInput}
                                        type="text" className="form-control" placeholder="First Name"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required={true} 
                                        name="last_name"
                                        value={address.last_name}
                                        onChange = {updateInput}
                                        type="text" className="form-control" placeholder="Last Name"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required={true} 
                                        name="phone"
                                        value={address.phone}
                                        onChange = {updateInput}
                                        type="text" className="form-control" placeholder="Phone Number"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required={true} 
                                        name="email"
                                        value={address.email}
                                        onChange = {updateInput}
                                        type="text" className="form-control" placeholder="Email Address"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required={true} 
                                        name="image"
                                        value={address.image}
                                        onChange = {updateInput}
                                        type="text" className="form-control" placeholder="Add Image from URL"/>
                                </div>
                                <div className="mb-2">
                                    <select 
                                        required={true} 
                                        name="groupID"
                                        value={address.groupID}
                                        onChange = {updateInput}
                                        className= "form-control">
                                        <option value="">Select Group</option>
                                        {
                                            groups.length > 0 &&
                                                groups.map(group =>{
                                                    return(
                                                        <option key={group.id}>{group.name}</option>
                                                    )
                                                })
                                        }
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value="Create"/>
                                    <Link to={'/addresses/list'}className= "btn btn-dark ms-2">Exit</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default AddAddress;