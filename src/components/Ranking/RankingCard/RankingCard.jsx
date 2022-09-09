/* eslint-disable consistent-return */
import gold from '../../../assets/miscellaneous/oro.png';
import silver from '../../../assets/miscellaneous/plata.png';
import bronze from '../../../assets/miscellaneous/bronce.png';

const RankingCard = ({ position, playername, status, score }) => {
  const setImage = () => {
    if (status === 'oro')
      return (
        <img src={gold} alt={`${status}_icon`} className="ranking-status" />
      );
    if (status === 'plata')
      return (
        <img src={silver} alt={`${status}_icon`} className="ranking-status" />
      );
    if (status === 'bronce')
      return (
        <img src={bronze} alt={`${status}_icon`} className="ranking-status" />
      );
  };

<<<<<<< HEAD
    const setImage = () =>{
        if(status === 'oro') return <img src={gold} alt={`${status}_icon`} className='ranking-status' />
        if(status === 'plata') return <img src={silver} alt={`${status}_icon`} className='ranking-status' />
        if(status === 'bronce') return <img src={bronze} alt={`${status}_icon`} className='ranking-status' />
    }

    return  <tr style={{}}>
    <th scope="row" style={{textAlign:"center"}}>{position}</th>
    <td data-testid={'testplayer'}>{playername}</td>
    <td>{setImage()}</td>
    <td>{score}</td>
=======
  return (
    <tr>
      <th scope="row" style={{ textAlign: 'center' }}>
        {position}
      </th>
      <td data-testid="testplayer">{playername}</td>
      <td>{setImage()}</td>
      <td>{score}</td>
>>>>>>> develop
    </tr>
  );
};

export default RankingCard;
