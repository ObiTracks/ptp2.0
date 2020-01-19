import React from 'react';
import './Searchbar.css';

function Searchbar(){
    return(
        <div className="searchbar">
            <div className="searchbox"></div>
            <nav className="dropdown">
                <button>Category</button>
                <ul>
                    <li><a href="#">Category 1</a></li>
                </ul>
            </nav>
            <nav className="dropdown">
                <button>Location</button>
                <ul>
                    <li><a href="#">Category 1</a></li>
                </ul>
            </nav>
        </div>
    )

}

export default Searchbar