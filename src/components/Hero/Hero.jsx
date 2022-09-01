import React from 'react'
import homeLogo from '../../assets/miscellaneous/home_logo.png'
import introImage from '../../assets/miscellaneous/home_wallpaper.png'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import './Hero.scss'


const Hero = () => {
    return (
        <>
            <ParallaxProvider>
            <Parallax translateY={[-10, 15]}>
            <div className="logo-location">
                <img data-aos="fade" data-aos-duration={3000} src={homeLogo} alt="home_logo_img" id='home-logo' />
            </div>
                <img src={introImage} alt="home_img" id="home-wallpaper" />
            </Parallax>
            </ParallaxProvider>
        </>
    )
}

export default Hero