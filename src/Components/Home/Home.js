import React from 'react';
import './Home.css';
import Searchbar from './Searchbar/Searchbar';
import Category from './Category/Category';
import Featuredlstng from './Featuredlstng/Featuredlstng';
import Testimonial from './Testimonial/Testimonial';
import Creator from './Creator/Creator';

function Home(){
    return(
        <div className='home'>
           <div className='intro'><Searchbar/></div>
           <div className='browse'><Category/><Category/><Category/></div>
           <div className='featuredlstings'><Featuredlstng/><Featuredlstng/><Featuredlstng/></div>
           <div className='about'>
               <div>About</div>
               <div>Img</div>
           </div>
           <div className='tstmony'><Testimonial/><Testimonial/></div>
           <div className='stats'></div>
           <div className='creators'><Creator/><Creator/><Creator/></div>
        </div>
    )
}


export default Home