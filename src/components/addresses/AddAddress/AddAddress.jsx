import React from 'react';
import {Link} from "react-router-dom";

let AddAddress = () => {
    return (
        <React.Fragment>
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
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="First Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Last Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Phone Number"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Email Address"/>
                                </div>
                                <div className="mb-2">
                                    <select className= "form-control">
                                        <option value="">Select Group</option>
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