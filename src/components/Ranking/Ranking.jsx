import './Ranking.scss'
import RankingCard from './RankingCard/RankingCard'
import Pagination from '../Pagination/Pagination'
import Position from '../Position/Position'
import { useState } from 'react'


const Ranking = () => {

    const [search, setSearch] = useState('')
    const [fakeRanking, setFakeRanking] = useState([
        {position:'1' , playername:'Juano', status:'gold', score:'9000'},
        {position:'2' , playername:'Giancin', status:'silver', score:'5000'},
        {position:'3' , playername:'Rodra', status:'bronze', score:'2000'}
    ])

    const handleSearchPlayer = (e) => {
        e.preventDefault()
        const filtered = fakeRanking.filter(p => p.playername.toLowerCase().includes(search))
        if(search!=='')
        setFakeRanking(filtered)        
        else
        setFakeRanking([{position:'1' , playername:'Juano', status:'gold', score:'9000'},
        {position:'2' , playername:'Giancin', status:'silver', score:'5000'},
        {position:'3' , playername:'Rodra', status:'bronze', score:'2000'}])

    }

    const fillSearch = (e) => {
        setSearch(e.target.value)
    }
    

    return <div className="ranking">
        <form className='ranking-search' onSubmit={handleSearchPlayer}>
            <label htmlFor="player" hidden>Player Name</label>
            <input type="text" id='player' placeholder='Ingrese player a buscar' onChange={fillSearch} />
            <button className='btn btn-ff'>Buscar</button>
        </form>

        <div className="ranking-table ">
        <table className="table table-borderless table-striped ranking-t">
            <thead className='ranking-header'>
                <tr>
                <th scope="col">
                    <div id='v-align'>
                        <span className="material-symbols-outlined">arrow_downward</span>Puesto
                    </div>
                    </th>
                <th scope="col">Nombre</th>
                <th scope="col">Status</th>
                <th scope="col">Puntos</th>
                </tr>
            </thead>
            <tbody>
                {fakeRanking && fakeRanking.map(p => {
                    return <RankingCard 
                                position={p.position} 
                                playername={p.playername} 
                                status={p.status} 
                                score={p.score}
                                key={p.playername}
                                 />
                })}                
            </tbody>
            </table>        

            <Pagination />

            <Position />
        </div>
    </div>
}

export default Ranking;