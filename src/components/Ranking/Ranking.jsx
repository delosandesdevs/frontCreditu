/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Ranking.scss';
import RankingCard from './RankingCard/RankingCard';
import Position from '../Position/Position';
import { getSearchPlayer } from '../../redux/action';
import Pages from '../Pagination/Pages/Pages';
import { GET_PAGINATION } from '../../redux/constans';
import Loader from '../Loader/Loader';
import BasicSelect from './SelectMUI/SelectMUI';

const Ranking = () => {
  const dispatch = useDispatch();

  const playersPaginated = useSelector((state) => state.pagination);
  const userInfo = useSelector((state) => state.loggedUser);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState({
    nickname: '',
    status: ''
  });
  const [order, setOrder] = useState('desc');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const calcToPaginate = Math.round(playersPaginated.total / 10) + 1;

  // Paginate and setError()
  useEffect(() => {
    // dispatch(getPlayersPaginated(page, order, 5))
    setLoading(true);
    setError(false);
    fetch(
      `${process.env.REACT_APP_API_URL}/players?page=${page}&size=10&orderby=${order}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PAGINATION,
          payload: data
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, [page, order]);

  const handleSearchPlayer = (e) => {
    e.preventDefault();
    dispatch(getSearchPlayer(search));
  };

  const fillSearch = (e) => {
    setSearch({ nickname: e.target.value });
  };

  // Pagination fn's
  const handlePages = (page) => {
    setPage(page);
  };
  const handleOrder = () => {
    setOrder(order === 'desc' ? 'asc' : 'desc');
  };
  //--------------

  const statusSelected = (age) => {
    setSearch({ status: age });
  };

  return (
    <div className="tree-wallpaper">
      <div className="mt-4">
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
        />
        <button className="btn btn-ff">Buscar</button>
        <BasicSelect statusSelected={statusSelected} />
      </form>
      {/* <Pagination /> */}
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
                  <span className="material-symbols-outlined">
                    arrow_downward
                  </span>
                  Posición
                </div>
              </th>
              <th scope="col">Nickname</th>
              <th scope="col">Status</th>
              <th scope="col">Puntos</th>
            </tr>
          </thead>
          <tbody style={{ height: '700px' }}>
            {loading ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              <>
                {playersPaginated &&
                  playersPaginated.players &&
                  playersPaginated.players.length > 0 &&
                  playersPaginated.players.map((p) => (
                    <RankingCard
                      position={p.ranking}
                      playername={p.nickname}
                      status={p.status}
                      score={p.score}
                      key={p.nickname}
                    />
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;
