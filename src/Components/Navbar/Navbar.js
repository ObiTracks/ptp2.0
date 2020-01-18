import React from 'react';
import './Navbar.css';
import usericon from '../../static/usericon.png';

function Navbar(){
    return(
        <div className="navbar">
            <h1>pass the plate</h1>
            <div>
                <a href="/">Home</a>
                <a href="/">View Listings</a>
                <a href="/">Contact</a>
                <a href="/">About</a>
                <a href="/"><img src={usericon}></img></a>
            </div>
        </div>
    )

}

export default Navbar