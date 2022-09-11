/* eslint-disable consistent-return */
import gold from '../../../assets/miscellaneous/oro.png';
import silver from '../../../assets/miscellaneous/plata.png';
import bronze from '../../../assets/miscellaneous/bronce.png';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const RankingCard = ({ id, position, playername, status, score }) => {

  const userInfo = useSelector(store => store.loggedUser)

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

  return <tr>
    <th scope="row" style={{ textAlign: "center", color: "lightgreen" }}>{position}</th>
    <th scope="row" style={{ textAlign: "center" }}>{id}</th>
    <td data-testid={'testplayer'}>{playername}</td>
    <td>{setImage()}</td>
    <td>{score}</td>
    {userInfo && userInfo.createdUser.role === 'admin'
      ? <td>
        <NavLink to={`/create-player/edit?id=${id}`}>
          <span class="material-symbols-outlined admin-edit">edit</span>
        </NavLink>
      </td>
      : null
    }
  </tr>
};

export default RankingCard;
