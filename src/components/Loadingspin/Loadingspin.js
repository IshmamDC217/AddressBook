import React from "react";
import loadingspinner from '../../assets/image/loadingspin.gif';

let Loadingspin = () => {
    return (
        <React.Fragment>
            <div>
                <img src={loadingspinner} alt="" className="d-block m-auto" style={({width : '200px'})}/>
            </div>
        </React.Fragment>
    )
}

export default Loadingspin;