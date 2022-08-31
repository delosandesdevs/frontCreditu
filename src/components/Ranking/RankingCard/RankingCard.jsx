import gold from '../../../assets/miscellaneous/oro.png'
import silver from '../../../assets/miscellaneous/plata.png'
import bronze from '../../../assets/miscellaneous/bronce.png'

const RankingCard = ({position, playername, status, score}) => {

    const setImage = () =>{
        if(status === 'gold') return <img src={gold} alt={`${status}_icon`} className='ranking-status' />
        if(status === 'silver') return <img src={silver} alt={`${status}_icon`} className='ranking-status' />
        if(status === 'bronze') return <img src={bronze} alt={`${status}_icon`} className='ranking-status' />
    }

    return  <tr>
    <th scope="row">{position}</th>
    <td data-testid={'testplayer'}>{playername}</td>
    <td>{setImage()}</td>
    <td>{score}</td>
    </tr>
}

export default RankingCard;