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
import { API_PORT } from '../../redux/constans'
import ImageTest from './test.png'
import Birds from './Birds/Birds';
import Button from '../Chatbot/Button/Button';

const Home = (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, [])

    const [showBot, setShowBot] = useState(true)
    const [errorThree, setErrorThree] = useState(false)
    const [errorTen, setErrorTen] = useState(false)
    const [topthree, setTopthree] = useState([
        {
            position: '1°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            position: '2°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            position: '3°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        }
    ])
    ///////////DATA FALSA
    const [topten, setTopten] = useState([
        {
            position: '4°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            position: '5°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            position: '6°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            position: '7°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            position: '8°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            position: '9°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            position: '10°',
            img: ImageTest,
            name: 'Test',
            ranking: 43
        }
    ])
    //////////////DATA FALSA
    //TESTING, NO BORRAR
    const testingTopThree = () => {
        fetch(`http://localhost:${API_PORT}/topthree`)
            .then(data => data.json())
            .then(res => setTopthree(res))
            .catch(e => setErrorThree(true))
    }

    //TESTING, NO BORRAR
    const testingTopTen = () => {
        fetch(`http://localhost:${API_PORT}/topten`)
            .then(data => data.json())
            .then(res => setTopten(res))
            .catch(e => setErrorTen(true))
    }

    useEffect(() => {
        //TESTING, NO BORRAR
        testingTopThree()
        testingTopTen()
    }, [])

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
            
            <Birds />

            <div className="logo-location">
                <img data-aos="fade" data-aos-duration={3000} src={homeLogo} alt="home_logo_img" id='home-logo' />
            </div>
            <img src={introImage} alt="home_img" id="home-wallpaper" />
            <TopPlayers topthree={topthree} topten={topten}/>
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
            <Button showMeTheBot={showMeTheBot} />
        </div>
    );
}

export default Home