import whiteLogo from '../../assets/miscellaneous/logo_white.png'
import CurrentPosition from './CurrentPosition';
import './Position.scss'
const Position = ({ toBeUsed }) => {
    return <div>
        <div className="position">
            <h3 id="position-title">
                Tu ranking en
            </h3>
            <img src={whiteLogo} alt="white_icon" id='position-logo' />
        </div>
        <CurrentPosition position={toBeUsed.ranking} status={toBeUsed.player.status} score={toBeUsed.player.score} />
    </div>
}

export default Position;