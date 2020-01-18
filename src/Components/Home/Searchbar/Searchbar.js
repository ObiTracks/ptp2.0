import React from 'react';
import './Searchbar.css';

function Searchbar(){
    return(
        <div className="intro">
            <h1>Explore a range of food items</h1>
            <div className="search_bar">
                <a className="search"></a>
                {/* <a className="search">What are you looking for?</a> */}
                <nav>
                    <nav>
                        <button></button>
                        <ul>
                            {/* <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li> */}
                        </ul>
                    </nav>
                    <nav>
                        <button></button>
                        <ul>
                            {/* <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li> */}
                        </ul>
                    </nav>
                </nav>

                {/* <div className="srch_btn">Search</div> */}
            </div>
        </div>
    )

}

export default Searchbar