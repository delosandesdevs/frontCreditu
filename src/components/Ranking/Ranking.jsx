/* eslint-disable no-undef */
import './Ranking.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankingCard from './RankingCard/RankingCard';
import Position from '../Position/Position';
import Pages from '../Pagination/Pages/Pages';
import { GET_PAGINATION } from '../../redux/constans';
import Loader from '../Loader/Loader';
import BasicSelect from './SelectMUI/SelectMUI';
import Title from '../Title/Title';

const Ranking = () => {
  const dispatch = useDispatch();
  const playersPaginated = useSelector((state) => state.pagination);
  const [players, setPlayers] = useState(playersPaginated);
  const userInfo = useSelector((state) => state.loggedUser);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState({
    nickname: '',
    status: 'todos'
  });
  const [order, setOrder] = useState('desc');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const calcToPaginate =
    (players.total / 10) % 1
      ? Math.floor(players.total / 10) + 1
      : players.total / 10;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePages = (page) => {
    setPage(page);
  };

  const getPlayersAndSearchs = () => {
    setLoading(true);

    fetch(
      `${process.env.REACT_APP_API_URL_LOCAL}/searchplayer?nickname=${search.nickname}&status=${search.status}&page=${page}&orderby=${order}&size=10`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PAGINATION,
          payload: data
        });
        setLoading(false);
        setPlayers(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const resetFilters = () => {
    setPage(0);
    setSearch({
      nickname: '',
      status: 'todos'
    });
    getPlayersAndSearchs();
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    getPlayersAndSearchs();
  }, [page, order]);

  const handleSearchPlayer = (e) => {
    e.preventDefault();
    setPage(0);
    getPlayersAndSearchs();
  };

  const fillSearch = (e) => {
    setSearch({
      ...search,
      nickname: e.target.value
    });
    setPage(0);
  };

  const statusSelected = (value) => {
    setSearch({
      ...search,
      status: value
    });
    setPage(0);
  };

  const handleOrder = () => {
    setOrder(order === 'desc' ? 'asc' : 'desc');
  };

  return (
    <div className="tree-wallpaper">
      <Title text="Ranking" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore non quos repellendus harum, ratione, dolor, natus nisi pariatur dignissimos voluptatum odit blanditiis! Cupiditate atque saepe fugiat quod fuga labore!</p>
      <div>
        {userInfo &&
          userInfo.createdUser &&
          userInfo.createdUser.player &&
          userInfo.createdUser.player === true && (
            <Position toBeUsed={userInfo} />
          )}
      </div>

      <form className="ranking-search" onSubmit={handleSearchPlayer}>
        <label htmlFor="player" hidden>
          Player Name
        </label>
        <input
          type="text"
          id="player"
          placeholder="Ingrese player a buscar"
          onChange={fillSearch}
          value={search.nickname}
        />
        <BasicSelect statusSelected={statusSelected} />
        <button className="btn btn-ff centered-line">
          Buscar
          <span class="material-symbols-outlined">search</span>
          </button>
        <button onClick={resetFilters} id="reset-btn">
          <span className="material-symbols-outlined">restart_alt</span>
        </button>
      </form>
      {loading ? (
        <div className="loading-container">
          <Loader />
        </div>
      ) : null}
      <div className="ranking-table">
        {error ? (
          <div data-testid="error" style={{ color: 'red' }}>
            Error
          </div>
        ) : null}

        <div className="pages ranking-header">
          <Pages pages={calcToPaginate} handlePages={(e) => handlePages(e)} />
        </div>

        <table
          className="table table-borderless table-striped ranking-t"
          style={{ paddingBottom: '200px' }}
        >
          <thead className="ranking-header">
            <tr>
              <th scope="col" onClick={handleOrder} id="order-by-toggle">
                <div id="v-align">
                  {order === 'desc'
                    ? <span className="material-symbols-outlined">
                        arrow_downward
                      </span>
                    : <span className="material-symbols-outlined">
                        arrow_upward
                      </span>
                  }
                  
                  Posición
                </div>
              </th>
              <th scope="col">ID</th>
              <th scope="col">Nickname</th>
              <th scope="col">Status</th>
              <th scope="col">Puntos</th>
              {userInfo &&
              userInfo.createdUser &&
              userInfo.createdUser.role === 'admin' ? (
                <th scope="col">ADMIN</th>
              ) : null}
            </tr>
          </thead>
          <tbody style={{height: "500px"}}>
            {players && players.players && players.players.length > 0
              ? players.players.map((p) => (
                  <RankingCard
                    position={'# '+p.ranking}
                    id={p.id}
                    playername={p.nickname}
                    status={p.status}
                    score={p.score}
                    key={p.ranking}
                  />
                ))
              : <td colSpan={6}><span style={{marginTop:"40px"}} className="centered-line">
                No se encontraron players
                <span class="material-symbols-outlined">person_search</span>
                </span></td>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;
