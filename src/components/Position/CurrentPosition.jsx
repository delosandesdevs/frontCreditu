import gold from '../../assets/miscellaneous/oro.png'
import silver from '../../assets/miscellaneous/plata.png'
import bronze from '../../assets/miscellaneous/bronce.png'
import './CurrentPosition.scss'

const CurrentPosition = ({position, status, score}) => {

    const setImage = () =>{
        if(status === 'gold') return <img src={gold} alt={`${status}_icon`} className='ranking-status' />
        if(status === 'silver') return <img src={silver} alt={`${status}_icon`} className='ranking-status' />
        if(status === 'bronze') return <img src={bronze} alt={`${status}_icon`} className='ranking-status' />
    }

    return <div className="current-position">
        <div>
            <span>{position}# puesto</span>
        </div>
        <div>
            {setImage()}
        </div>
        <div>
            <span>{score} puntos</span>
        </div>
    </div>
}

export default CurrentPosition;