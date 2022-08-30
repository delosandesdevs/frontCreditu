import React, { useEffect, useState } from 'react'
import { API_PORT } from '../../redux/constans'
import Player from '../Player/Player'
import ImageTest from './test.png'
import './TopPlayers.scss'

const TopPlayers = () => {

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
        <div className='top-players'>
            <div className='top-players_container'>
                <div className='top-three'>
                    <h1 className='top-three-title'>TOP 10</h1> 
                    {/* {errorThree && <p>No top 3 were found</p>} */}
                    <div className='top-three_container'>
                        {topthree && topthree.map((p,i) => <Player position={i + 1} name={p.name} img={p.img} ranking={p.ranking} alt={'topthree'} key={p.ranking} />)}
                    </div>
                </div>
                <div className='top-ten_container'>
                    {/* {errorTen && <p>No top 10 were found</p>} */}
                    {topten && topten.map((p,i) => <Player position={i + 4} name={p.name} img={p.img} ranking={p.ranking} alt={'topten'} key={p.ranking} size={true} />)}
                </div>
            </div>
        </div>
    )
}

export default TopPlayers