import { useEffect } from 'react';
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


const Avatar = ({pic, displayName}) => {
    
    // useEffect(() => {console.log('name',name); randomName()},[])

    const randomName = () => {
        
        if(typeof pic === 'number'){
                        
            switch (pic) {
                case 1: 
                    return avatar1
                case 2: 
                    return avatar2
                case 3: 
                    return avatar3
                case 4: 
                    return avatar4
                case 5: 
                    return avatar5
                case 6: 
                    return avatar6
                case 7: 
                    return avatar7
                case 8: 
                    return avatar8
                case 9: 
                    return avatar9
                case 10: 
                    return avatar10
            
                default:
                    return avatar6;
            }

        }

        switch (pic) {
            case 'juano': 
                return juano
            case 'flor': 
                return flor
            case 'rami': 
                return rami;
            case 'rodri': 
                return rodri
            case 'gian': 
                return gian    
            default:
                return avatar5    
    }
}

    return <div className="avatar">
        <img src={randomName()} alt={`${displayName}_img`} className='avatar-img glass-effect' />
        <span>{displayName}</span>
    </div>
}

export default Avatar;