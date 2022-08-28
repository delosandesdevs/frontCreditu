import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import{actionTest} from '../redux/action'
import {useEffect} from 'react'


function Home(props) {
    const data = useSelector(state => state.test_state)
    const dispatch = useDispatch()

    return (
        <div>
            <p>pruebas desde Develop</p>
            <div>
                {
                    data.map( e => (
                        <p>{e.test}</p>
                    ))
                }
            </div>
            <button onClick={()=>dispatch(actionTest())}>Test</button>
        </div>
    );
}

export default Home