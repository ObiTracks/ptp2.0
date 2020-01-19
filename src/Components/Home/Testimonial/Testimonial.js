import React from 'react';
import './Testimonial.css';
import fillerImg from '../../../static/headshotFillerImg.jpg';

function Testimonial(){
    return(
        <div className="testimonial">
            <img src={fillerImg}></img>

            <div className="content">
                <h1>" Amazing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis luctus congue scelerisque. Fusce sit amet varius ligula. 
                    In ac magna nec risus tempor commodo. Quisque sit amet erat 
                    accumsan, sagittis nisl in, sagittis lorem. Mauris nec 
                    tincidunt erat. Proin ut posuere urna. Praesent id ultrices 
                    quam. Suspendisse nibh diam, malesuada eget velit non, 
                    lacinia imperdiet nunc. In mattis tellus quis eros iaculis, 
                    sit amet gravida ex semper.
                </p>
                <h1 id="scndQuote">"</h1>
                <div className="author">
                    <h3>Obi Ihej // Webdeveloper</h3>
                </div>
            </div>
        </div>
    )

}

export default Testimonial