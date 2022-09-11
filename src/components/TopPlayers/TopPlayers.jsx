import Player from '../Player/Player';
import './TopPlayers.scss';

const TopPlayers = ({ topten }) => {
  return (
    <div className="top-players">
      <h1 className="top-players-title">TOP 10</h1>
      <div className="top-players_container">
        {topten &&
          topten.map((p, i) => (
            <Player
              position={i + 1}
              name={p.nickname}
              img={p.avatar}
              ranking={p.score}
              alt="top"
              key={p.id}
              size={i > 2}
            />
          ))}
      </div>
    </div>
  )
}

export default TopPlayers;