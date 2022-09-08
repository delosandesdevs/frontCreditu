import './Ranking.scss'
import RankingCard from './RankingCard/RankingCard'
import Pagination from '../Pagination/Pagination'
import Position from '../Position/Position'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlayers, getPlayersPaginated, getSearchPlayer } from '../../redux/action'
import Pages from '../Pagination/Pages/Pages'
import { API_URL, GET_PAGINATION } from '../../redux/constans'
import Loader from '../Loader/Loader'
import BasicSelect from './SelectMUI/SelectMUI'

const Ranking = () => {

    const dispatch = useDispatch()

    const playersPaginated = useSelector(state => state.pagination)
    const userInfo = useSelector(state => state.loggedUser)
    const [page, setPage] = useState(0)
    const [search, setSearch] = useState({
        nickname: '',
        status: 'todos'
    })
    const [order, setOrder] = useState('desc')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const calcToPaginate = Math.round(playersPaginated.total / 10) + 1;

    const getPlayersAndSearchs = () => {

        const allResults = `players?page=${page}&orderby=${order}`
        const specificSearch = `searchPlayer?nickname=${search.nickname}&page=${page}&orderby=${order}&status=${search.status}`
        const statusSearch = `filterByStatus?status=${search.status}&page=${page}&orderby=${order}`
        let dynamicSearchPath = allResults

        if(search.nickname === ''){
            console.log('por status')
            console.log(search)
            dynamicSearchPath = statusSearch
        } 

        if(search.nickname === '' && search.status === 'Todos'){
            console.log('por todos')
            dynamicSearchPath =  allResults
        } 

        if(search.nickname !== ''){
            console.log('por combinación')
            console.log(search)
            console.log(process.env.REACT_APP_API_URL)
            dynamicSearchPath = specificSearch
        }
        
        console.log(dynamicSearchPath)
        fetch(`${process.env.REACT_APP_API_URL}/${dynamicSearchPath}`)
            .then(res => res.json())
            .then(data => {
                console.log('Ruta ejecutada: ', dynamicSearchPath)
                console.log('Busqueda: ',data)
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
    }

    //Paginate and setError()
    useEffect(() => {
        setLoading(true)
        setError(false)
        getPlayersAndSearchs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, order])

    useEffect(() => {
        getPlayersAndSearchs()
    },[])

    const handleSearchPlayer = (e) => {
        e.preventDefault()
        getPlayersAndSearchs()
        // dispatch(getSearchPlayer(search))
    }

    const fillSearch = (e) => {
        setSearch({
            ...search,
            nickname: e.target.value
        })
    }

    const statusSelected = (value) => {
        setSearch({
            ...search,
            status: value
        })
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
            {userInfo && userInfo.createdUser && userInfo.createdUser.player && userInfo.createdUser.player === true && <Position toBeUsed={userInfo} />}
        </div>

        <form className='ranking-search' onSubmit={handleSearchPlayer}>
            <label htmlFor="player" hidden>Player Name</label>
            <input type="text" id='player' placeholder='Ingrese player a buscar' onChange={fillSearch} />
            <button className='btn btn-ff' >Buscar</button>
            <BasicSelect statusSelected={statusSelected} />
        </form>
        <div className="ranking-table" >
            {error
                ? <div data-testid='error' style={{ color: 'red' }}>Error</div>
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