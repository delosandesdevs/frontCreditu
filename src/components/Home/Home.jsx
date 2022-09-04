import React from 'react';
//import { useDispatch, useSelector } from 'react-redux'
//import { actionTest } from '../../redux/action'
import { useEffect } from 'react'
import './Home.scss'
import PieChart from '../Charts/PieChart';
import Aos from 'aos'
import TopPlayers from '../TopPlayers/TopPlayers';
import Hero from '../Hero/Hero';
import { useSelector } from 'react-redux'
import 'aos/dist/aos.css'
import { useDispatch } from 'react-redux'
import { getTenPlayers } from "../../redux/action"

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTenPlayers());
    }, [])

    const topten = useSelector(state => (state.topten.slice(4, 11)));
    const topthree = useSelector(state => (state.topten.slice(0, 3)));

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    ////////////////////////TESTING, NO BORRAR/////////////////////////////////

    // const [topten, setTopten] = useState(useSelector(state => (state.topten.slice(4, 11))));
    // const [topthree, setTopthree] = useState(useSelector(state => (state.topten.slice(0, 3))));

    // const [errorThree, setErrorThree] = useState(false)
    // const [errorTen, setErrorTen] = useState(false)

    //TESTING, NO BORRAR
    // const testingTopThree = () => {
    //     fetch(`http://localhost:${API_PORT}/topthree`)
    //         .then(data => data.json())
    //         .then(res => setTopthree(res))
    //         .catch(e => setErrorThree(true))
    // }

    // //TESTING, NO BORRAR
    // const testingTopTen = () => {
    //     fetch(`http://localhost:${API_PORT}/topten`)
    //         .then(data => data.json())
    //         .then(res => setTopten(res))
    //         .catch(e => setErrorTen(true))
    // }

    // useEffect(() => {
    //     //TESTING, NO BORRAR
    //     testingTopThree()
    //     testingTopTen()
    // }, [])
    ///////////////////////////////////////////////////////////

    return (
        <div className='home_container'>
            <div style={{ backgroundColor: "white" }}>
                <Hero />
            </div>
            <TopPlayers topthree={topthree} topten={topten} />
            <PieChart />
        </div>
    );
}

export default Home