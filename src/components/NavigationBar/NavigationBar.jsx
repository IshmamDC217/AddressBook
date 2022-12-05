import React from 'react';
import{Link} from 'react-router-dom';

let NavigationBar = () => {
    return (
        <React.Fragment>
            <nav className= "navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                        <i className="fa fa-mobile text-success me-2"/>Address <span className="text-success">Book</span></Link>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default NavigationBar;