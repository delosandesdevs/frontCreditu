import React from 'react'
import homeLogo from '../../assets/miscellaneous/home_logo.png'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import './Hero.scss'
import Scroller from './Scroller/Scroller';


const Hero = () => {
    return (<>
        <ParallaxProvider>
            <Parallax translateY={[-10, 25]}>
                <div id='home-section'>
                    <div className="logo-location">
                        <img data-aos="fade" data-aos-duration={3000} src={homeLogo} alt="home_logo_img" id='home-logo' />
                    </div>

                    <div id='home-oxigen-text'>
                        <h4>OXIGENANDO<br />NUESTRO<br />PLANETA</h4>
                        <Scroller />
                    </div>

                </div>
            </Parallax>
        </ParallaxProvider>
    </>
    )
}

export default Hero