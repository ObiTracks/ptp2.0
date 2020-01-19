import React from 'react';
import './Featuredlstng.css';

function Featuredlstng(props){
    return(
        <div className="lstng">
            <p>{props.date}</p>

            <div className="postName">
                <h1>{props.food}</h1>
                <p>{props.category}</p>
                <p>{props.quantity}</p>
            </div>

            <div className="listerInfo">
                <h1>{props.title}</h1>
                <p>{props.location}</p>
            </div>
        </div>
    )

}

export default Featuredlstng