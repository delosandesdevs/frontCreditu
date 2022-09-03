import Player from '../Player/Player'
import './TopPlayers.scss'

const TopPlayers = ({topthree, topten}) => {

   

    return (
        <div className='top-players'>
            <div className='top-players_container'>
                <div className='top-three'>
                    <h1 className='top-three-title'>TOP 10</h1> 
                    {/* {errorThree && <p>No top 3 were found</p>} */}
                    <div className='top-three_container'>
                        {topthree && topthree.map((p,i) => <Player position={i + 1} name={p.nickname} img={p.avatar} ranking={p.score} alt={'topthree'} key={p.id} />)}
                    </div>
                </div>
                <div className='top-ten_container'>
                    {/* {errorTen && <p>No top 10 were found</p>} */}
                    {topten && topten.map((p,i) => <Player position={i + 4} name={p.nickname} img={p.avatar} ranking={p.score} alt={'topten'} key={p.id} size={true} />)}
                </div>
            </div>
        </div>
    )
}

export default TopPlayers