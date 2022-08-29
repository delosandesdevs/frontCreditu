import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actionTest } from '../../redux/action'
import { useEffect } from 'react'
import { useState } from 'react';
import Player from '../Player/Player';
import { API_PORT } from '../../redux/constans';
import ImageTest from './test.png'
import './Home.scss'

const Home = (props) => {

    //TESTING, NO BORRAR
    const [topthree, setTopthree] = useState([
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        }
    ])
    const [topten, setTopten] = useState([
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        },
        {
            img: ImageTest,
            name: 'Test',
            ranking: 43
        }
    ])
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

    return (
        <div className='home_container'>
            <div className='top-three_container'>
                {/* {errorThree && <p>No top 3 were found</p>} */}
                <h2>TOP 10</h2>
                {topthree && topthree.map(p => <Player name={p.name} img={p.img} ranking={p.ranking} alt={'topthree'} key={p.ranking} />)}
            </div>
            <div className='top-ten_container'>
                {/* {errorTen && <p>No top 10 were found</p>} */}
                {topten && topten.map(p => <Player name={p.name} img={p.img} ranking={p.ranking} alt={'topten'} key={p.ranking} size={true}/>)}
            </div>
            <hr />
        </div>
    );
}

export default Home