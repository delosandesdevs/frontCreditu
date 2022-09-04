import avatar1 from '../../assets/avatars/avatar-01.png'
import avatar2 from '../../assets/avatars/avatar-02.png'
import avatar3 from '../../assets/avatars/avatar-03.png'
import avatar4 from '../../assets/avatars/avatar-04.png'
import avatar5 from '../../assets/avatars/avatar-05.png'
import avatar6 from '../../assets/avatars/avatar-06.png'
import avatar7 from '../../assets/avatars/avatar-07.png'
import avatar8 from '../../assets/avatars/avatar-08.png'
import avatar9 from '../../assets/avatars/avatar-09.png'
import avatar10 from '../../assets/avatars/avatar-10.png'
import juano from '../../assets/avatars/juano.png'
import rodri from '../../assets/avatars/rodri.png'
import rami from '../../assets/avatars/rami.png'
import gian from '../../assets/avatars/gian.png'
import flor from '../../assets/avatars/flor.png'
import './Avatar.scss'


const Avatar = ({ pic, displayName }) => {

    const randomName = () => {

        switch (pic) {
            case '' : return avatar1
            case '/images/avatar-01.png': return avatar1
            case '/images/avatar-02.png': return avatar2
            case '/images/avatar-03.png': return avatar3
            case '/images/avatar-04.png': return avatar4
            case '/images/avatar-05.png': return avatar5
            case '/images/avatar-06.png': return avatar6
            case '/images/avatar-07.png': return avatar7
            case '/images/avatar-08.png': return avatar8
            case '/images/avatar-09.png': return avatar9
            case '/images/avatar-10.png': return avatar10
            case 'juano': return juano
            case 'flor': return flor
            case 'rami': return rami;
            case 'rodri': return rodri
            case 'gian': return gian
            default: return avatar5
        }
    }

    return <div className="avatar">
        <img src={randomName()} alt={`${displayName}_img`} className='avatar-img glass-effect' />
        <span>{displayName}</span>
    </div>
}

export default Avatar;