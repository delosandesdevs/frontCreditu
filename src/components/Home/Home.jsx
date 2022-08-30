import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actionTest } from '../../redux/action'
import { useEffect } from 'react'
import { useState } from 'react';
import introImage from '../../assets/miscellaneous/home_wallpaper.png'
import homeLogo from '../../assets/miscellaneous/home_logo.png'
import './Home.scss'
import PieChart from '../Charts/PieChart';
import Aos from 'aos'
import { Bot } from '../Chatbot/Chatbot'
import 'aos/dist/aos.css'
import config from '../Chatbot/Chatbot/config';
import MessageParser from '../Chatbot/Chatbot/MessageParser';
import ActionProvider from '../Chatbot/Chatbot/actionProvider';
import TopPlayers from '../TopPlayers/TopPlayers';

const Home = (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, [])

    const [showBot, setShowBot] = useState(true)

    function showMeTheBot() {
        const bot = document.getElementById('bot')
        // eslint-disable-next-line 
        { showBot ? setShowBot(false) : setShowBot(true) }
        if (showBot) {
            // bot.setAttribute('data-aos','fade-right');
            bot.classList.add('showBot')
            //   setAnimated(false)
        }
        else {
            // bot.setAttribute('data-aos','');
            bot.classList.remove('showBot')
            //   setAnimated(true)
        }
    }

    return (
        <div className='home_container'>
            <div className="logo-location">
                <img data-aos="fade" data-aos-duration={3000} src={homeLogo} alt="home_logo_img" id='home-logo' />
            </div>
            <img src={introImage} alt="home_img" id="home-wallpaper" />
            <TopPlayers />
            <div className="chart">
                <PieChart />
            </div>

            <div className="bot" id='bot' >
                <Bot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>

            <button className={`chatbot chat-button`} onClick={showMeTheBot}>
                <span className="material-symbols-outlined">
                    forest
                </span>
                ForestChat
            </button>
        </div>
    );
}

export default Home