import React from 'react';
import './Home.css';
// import Searchbar from './Searchbar/Searchbar';
// import Category from './Category/Category';
// import Featuredlstng from './Featuredlstng/Featuredlstng';
// import Testimonial from './Testimonial/Testimonial';
// import Creator from './Creator/Creator';

function Home(){
    return(
        <div className='home'>
           <div className='intro'></div>
           <div className='browse'></div>
           <div className='featuredlstings'></div>
           <div className='about'></div>
           <div className='tstmony'></div>
           <div className='stats'></div>
           <div className='creators'></div>
        </div>
    )
}


export default Home