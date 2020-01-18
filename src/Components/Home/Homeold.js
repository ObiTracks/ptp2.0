import React from 'react';
import './Home.css';

function Home(){
    return(
        <div className='home'>
            <div className='intro'>
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

            <div className='browse'>
                <h1>Browse Categories</h1>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>

            <div className='pop_posters'>
                <h1>Popular Partners</h1>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>

            <div className='about'>
                <h1>About</h1>
                <div id="img"></div>
                <div className=""></div>
            </div>

            <div className='tstmony'>
                <h1>Testimonials</h1>
                <div className=""></div>
            </div>

            <div className='theNumbers'>
                <h1>Our progress by the Numbers</h1>
                <div className=""></div>
                <div className=""></div>
            </div>

            <div className='creators'>
                <h1>Behind the Mission</h1>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>

            
        </div>
    )
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

export default Home