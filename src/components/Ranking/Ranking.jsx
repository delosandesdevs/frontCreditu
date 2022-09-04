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

    const allPlayers = useSelector(state => state.players)
    const playersPaginated = useSelector(state => state.pagination)

    // const calcToPaginate = Math.floor(allPlayersLength/10);

    const [page, setPage] = useState(0)
    const [order, setOrder] = useState('desc')
    const [loading, setLoading] = useState(false)

    const calcPages = Math.round(allPlayers.length/5)

    useEffect(() => {
        // dispatch(getPlayersPaginated(page, order, 5))    
        setLoading(true)    
        fetch(`${API_URL}/players?page=${page}&size=10&orderby=${order}`)
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: GET_PAGINATION,
                        payload: data
                    })
                setLoading(false)
                })
                .catch(err => console.log(err))
        
    },[page, order])

    useEffect(() =>{ 
        dispatch(getAllPlayers())
    },[])

    const [search, setSearch] = useState('')
    const [fakeRanking, setFakeRanking] = useState([
        { position: '1', playername: 'Juano', status: 'gold', score: '9000' },
        { position: '2', playername: 'Giancin', status: 'silver', score: '5000' },
        { position: '3', playername: 'Rodra', status: 'bronze', score: '2000' }
    ])

    const handleSearchPlayer = (e) => {
        e.preventDefault()
        const filtered = fakeRanking.filter(p => p.playername.toLowerCase().includes(search))
        if (search !== '')
            setFakeRanking(filtered)
        else
            setFakeRanking([{ position: '1', playername: 'Juano', status: 'gold', score: '9000' },
            { position: '2', playername: 'Giancin', status: 'silver', score: '5000' },
            { position: '3', playername: 'Rodra', status: 'bronze', score: '2000' }])

    }

    const fillSearch = (e) => {
        console.log(e.target)
        setSearch(e.target.value)
    }

    const playerPosition = (player) => {
        return allPlayers.findIndex(p => {return p.nickname === player})+1
    }

    const handlePages = (page) => {
        setPage(page)
    }

    const handleOrder = () => {
        setOrder(order === 'desc' ? 'asc' : 'desc')
    }


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

            <div className="pages ranking-header">
                <Pages pages={148} handlePages={(e) => handlePages(e)} />
            </div>

            <table className="table table-borderless table-striped ranking-t" style={{ paddingBottom: '200px' }}>
                <thead className='ranking-header'>
                    <tr>
                        <th scope="col" onClick={handleOrder} id='order-by-toggle'>
                            <div id='v-align'>
                                <span className="material-symbols-outlined">arrow_downward</span>Puesto
                            </div>
                        </th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Status</th>
                        <th scope="col">Puntos</th>
                    </tr>
                </thead>
                <tbody style={{height:'700px'}}>
                    {loading 
                    ? <>
                        <div className="loader">
                            <Loader />
                        </div>
                    </>
                    : <>
                    {playersPaginated && playersPaginated.map(p => {
                        return <RankingCard
                            position={playerPosition(p.nickname)}
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