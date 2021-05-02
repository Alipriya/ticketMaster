import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css"
import ticketmaster2 from './ticketmaster2.jpeg'
import ticketmaster3 from './ticketmaster3.jpeg'
import ticketmaster4 from './ticketmaster4.jpeg'
import ticketmaster8 from './ticketmaster-8.png'
export default () => (
 
    <Carousel autoPlay >
       <div>
            <img alt="" src={ticketmaster2} />
        </div>
        <div>
            <img alt="" src={ticketmaster3} />
        </div>
        <div>
            <img alt="" src={ticketmaster4} />
        </div>
        <div>
            <img alt="" src={ticketmaster8}/>
        </div>
    </Carousel>
    
);
