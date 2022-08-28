import React,{useState} from 'react';
import{addTest} from '../redux/action'
import {useDispatch} from 'react-redux'

function User(props) {
    const dispatch = useDispatch()
    const [data, setData] = useState()
    
    function changer(e){
        setData ({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    console.log(data)

    return (
        <div>
            <form>
                <input type="text" onChange={changer} name = 'test'/>
                <label >nombre</label>
                <input type="button" value="enviar" onClick={()=>dispatch(addTest(data))} />
            </form> 
        </div>
    );
}

export default User;