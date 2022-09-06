import './Ranking.scss'
import RankingCard from './RankingCard/RankingCard'
import Pagination from '../Pagination/Pagination'
import Position from '../Position/Position'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlayers, getPlayersPaginated } from '../../redux/action'
import Pages from '../Pagination/Pages/Pages'
import { API_URL, GET_PAGINATION } from '../../redux/constans'
import Loader from '../Loader/Loader'

const Ranking = () => {

    const dispatch = useDispatch()

    const playersPaginated = useSelector(state => state.pagination)
    
    const [page, setPage] = useState(0)
    const [order, setOrder] = useState('desc')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)    
    const calcToPaginate = Math.round(playersPaginated.total/10)+1;

    //Paginate and setError()
    useEffect(() => {
        // dispatch(getPlayersPaginated(page, order, 5))    
        setLoading(true)
        setError(false)
        fetch(`${process.env.REACT_APP_API_URL}/players?page=${page}&size=10&orderby=${order}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.players);
                dispatch({
                    type: GET_PAGINATION,
                    payload: data
                })
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
                console.log(err)
            })

    }, [page, order])

    const [search, setSearch] = useState('')    

    const handleSearchPlayer = (e) => {
        e.preventDefault()        

    }

    const fillSearch = (e) => {
        setSearch(e.target.value)
    }

    //Pagination fn's
    const handlePages = (page) => {
        setPage(page)
    }
    const handleOrder = () => {
        setOrder(order === 'desc' ? 'asc' : 'desc')
    }
    //--------------

    return <div className="tree-wallpaper">
        <div className="mt-4">
            <Position toBeUsed={'ranking'} />
        </div>

        <form className='ranking-search' onSubmit={handleSearchPlayer}>
            <label htmlFor="player" hidden>Player Name</label>
            <input type="text" id='player' placeholder='Ingrese player a buscar' onChange={fillSearch} />
            <button className='btn btn-ff'>Buscar</button>
        </form>
        {/* <Pagination /> */}
        <div className="ranking-table" >
            {error
                ? <div data-testid='error' style={{color:'red'}}>Error</div>
                : null
            }

            <div className="pages ranking-header">
                <Pages pages={calcToPaginate} handlePages={(e) => handlePages(e)} />
            </div>

            <table className="table table-borderless table-striped ranking-t" style={{ paddingBottom: '200px' }}>
                <thead className='ranking-header'>
                    <tr>
                        <th scope="col" onClick={handleOrder} id='order-by-toggle'>
                            <div id='v-align'>
                                <span className="material-symbols-outlined">arrow_downward</span>Posición
                            </div>
                        </th>
                        <th scope="col">Nickname</th>
                        <th scope="col">Status</th>
                        <th scope="col">Puntos</th>
                    </tr>
                </thead>
                <tbody style={{ height: '700px' }}>

                    {loading
                        ? <>
                            <div className="loader">
                                <Loader />
                            </div>
                        </>
                        : <>
                            {playersPaginated && playersPaginated.players && playersPaginated.players.length > 0 && playersPaginated.players.map(p => {
                                return <RankingCard
                                    position={p.ranking}
                                    playername={p.nickname}
                                    status={p.status}
                                    score={p.score}
                                    key={p.nickname}
                                />
                            })}
                        </>
                    }
                </tbody>
            </table>


        </div>
    </div>
}

export default Ranking;