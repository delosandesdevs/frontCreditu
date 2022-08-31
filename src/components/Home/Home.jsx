import React from 'react';
//import { useDispatch, useSelector } from 'react-redux'
//import { actionTest } from '../../redux/action'
import { useEffect } from 'react'
import { useState } from 'react';
import './Home.scss'
import PieChart from '../Charts/PieChart';
import Aos from 'aos'
import TopPlayers from '../TopPlayers/TopPlayers';
import { API_PORT } from '../../redux/constans'
import ImageTest from './test.png'
import Hero from '../Hero/Hero';
import ChatbotContainer from '../Chatbot/ChatbotContainer';
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    return (
        <div className='home_container'>
            <Hero />
            <TopPlayers topthree={topthree} topten={topten} />
            <PieChart />
            <ChatbotContainer />
        </div>
    );
}

export default Home