import whiteLogo from '../../assets/miscellaneous/logo_white.png'
import CurrentPosition from './CurrentPosition';
import './Position.scss'
const Position = () => {
    return <div>
        <div className="position">
            <h3 id="position-title">Tu puesto en</h3>
            <img src={whiteLogo} alt="white_icon" id='position-logo' />
        </div>

        <CurrentPosition position={'2'} status={'silver'} score={'312'} />
    </div>
}

export default Position;