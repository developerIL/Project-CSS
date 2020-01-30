import React from 'react';
import { Carousel } from 'react-bootstrap'

import slide01 from '../images/slide01.jpg'
import slide02 from '../images/slide02.jpg'
import '../Animate.css';

function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{objectFit:'cover', width:'100%',height:'500px'}}
                        src={slide01} alt="slide01"
                    />
                    <Carousel.Caption>
                      <div><h2 className="animated bounceInRight"
                        style={{animationDelay:'1s', fontSize:'50px', fontFamily:'uppercase', fontWeight:'bold'}}>Welcome to My<span> Projects</span></h2></div>
                        <h3 className="animated bounceInLeft" style={{animationDelay:'2s', fontSize:'30px', fontFamily:'uppercase', fontWeight:'bold'}}>Web Design and Development</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{objectFit:'cover', width:'100%',height:'500px'}}
                        src={slide02} alt="slide02"
                    />
                     <Carousel.Caption>
                      <div><h2 className="animated bounceInRight"
                        style={{animationDelay:'1s', fontSize:'50px', fontFamily:'uppercase', fontWeight:'bold'}}>Nice to Meet <span> You</span></h2></div>
                        <h3 className="animated bounceInLeft" style={{animationDelay:'2s', fontSize:'30px', fontFamily:'uppercase', fontWeight:'bold'}}>Take a break and look at my projects</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
