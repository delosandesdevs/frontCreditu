import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actionTest } from '../../redux/action'
import { useEffect } from 'react'
import { useState } from 'react';
import Player from '../Player/Player';
import { API_PORT } from '../../redux/constans';
import ImageTest from './test.png'
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

const Home = (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
      }, [])

      const [showBot, setShowBot] = useState(true)

    //TESTING, NO BORRAR
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
    const [errorThree, setErrorThree] = useState(false)
    const [errorTen, setErrorTen] = useState(false)

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
            <div className="logo-location">
                <img data-aos="fade" data-aos-duration={3000} src={homeLogo} alt="home_logo_img" id='home-logo' />
            </div>
            <img src={introImage} alt="home_img" id="home-wallpaper" />
            <div className='top-three_container'>
                {/* {errorThree && <p>No top 3 were found</p>} */}
                <h2>TOP 10</h2>
                {topthree && topthree.map(p => <Player position={p.position} name={p.name} img={p.img} ranking={p.ranking} alt={'topthree'} key={p.ranking} />)}
            </div>
            <div className='top-ten_container'>
                {/* {errorTen && <p>No top 10 were found</p>} */}
                {topten && topten.map(p => <Player position={p.position} name={p.name} img={p.img} ranking={p.ranking} alt={'topten'} key={p.ranking} size={true}/>)}
            </div>
            <hr />

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