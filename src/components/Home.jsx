import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import{actionTest} from '../redux/action'
import {useEffect} from 'react'
import { useState } from 'react';
import { Player } from './Player';
import { API_PORT } from '../redux/constans';

function Home(props) {
    
    //TESTING, NO BORRAR
    const [topthree, setTopthree] = useState([])
    const [topten, setTopten] = useState([])
    const [errorThree, setErrorThree] = useState(false)
    const [errorTen, setErrorTen] = useState(false)    
    
    //TESTING, NO BORRAR
    const testingTopThree = ()=>{
        fetch(`http://localhost:${API_PORT}/topthree`)
        .then(data => data.json())
        .then(res => setTopthree(res))
        .catch(e => setErrorThree(true))
    }

    //TESTING, NO BORRAR
    const testingTopTen = ()=>{
        fetch(`http://localhost:${API_PORT}/topten`)
        .then(data => data.json())
        .then(res => setTopten(res))
        .catch(e => setErrorTen(true))
    }

    useEffect(() => {
        //TESTING, NO BORRAR
        testingTopThree()
        testingTopTen()
    },[])

    const data = useSelector(state => state.test_state)
    const dispatch = useDispatch()

    return (
        <div>

            <p>desde PRE-PRODUCTION</p>

            <div>
                {
                    data.map( e => (
                        <p>{e.test}</p>
                    ))
                }
            </div>
            <button onClick={()=>dispatch(actionTest())}>Test</button>

            <h1>Top 3</h1>
            <hr />
            {errorThree && <p>No top 3 were found</p>}
            <ol>
                {topthree && topthree.map(p => <li><Player name={p.name} img={p.img} ranking={p.ranking} alt={'topthree'} key={p.ranking} /></li>)}
            </ol>

            {errorTen && <p>No top 10 were found</p>}
            <ol>
                {topten && topten.map(p => <li><Player name={p.name} img={p.img} ranking={p.ranking} alt={'topten'} key={p.ranking} /></li>)}
            </ol>

            <hr />
        </div>
    );
}

export default Home