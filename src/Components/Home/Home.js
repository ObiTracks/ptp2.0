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
           <div className='browse'><Category/><Category/><Category/><Category/><Category/><Category/></div>
           <div className='featuredlstings'>
               <div className="lstngs">
                   <Featuredlstng date={<p>Friday, August 5th</p>}
                   food={<h1>Olive Bread Loaves</h1>}
                   category={<p>Breads</p>}
                   quantity={<p>10 loaves available</p>}
                   title={<h1>Panera Bread Factory</h1>}
                   location={<p>Bishop Avenue, New York</p>}/>
               </div>
            </div>
           <div className='about'>
               <div className="text">
               <h1>About the Platform</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Duis luctus congue scelerisque. Fusce sit amet varius ligula.
                   In ac magna nec risus tempor commodo. Quisque sit amet erat accumsan, 
                   sagittis nisl in, sagittis lorem. Mauris nec tincidunt erat. 
                   Proin ut posuere urna. Praesent id ultrices quam. 
                   Suspendisse nibh diam, malesuada eget velit non, 
                   lacinia imperdiet nunc.</p>
                </div>
               <div className="images">
                   <div className="imageGallery"></div>
               </div>
           </div>
           <div className='tstmony'><Testimonial/><Testimonial/></div>
           <div className='stats'></div>
           <div className='creators'><Creator/><Creator/><Creator/></div>
        </div>
    )
}


export default Home