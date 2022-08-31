import './Navbar.scss'
import logo from '../../assets/miscellaneous/logo.png'
import { NavLink } from 'react-router-dom'
import profile from '../../assets/avatars/profile.png'

const Navbar = () => {
    return <div className='nav navbar navbar-expand-lg'>
        <div className="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <div className="collapse navbar-collapse navw" id="navbarSupportedContent">
            <img src={logo} alt="logo_nav" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className='container-nav-button'>
                    <NavLink to='/home' className="nav-button">Inicio</NavLink>
                </div>
                <div className='container-nav-button'>
                    <NavLink to='/create-player' className="nav-button">Crear Player</NavLink>
                </div>
                <div className='container-nav-button'>
                    <NavLink to='/ranking' className="nav-button">Ranking</NavLink>
                </div>
                <div className='container-nav-button'>
                    <NavLink to='' className="nav-button">Acerca de</NavLink>
                </div>



                <div className=''>
                    <div className="dropdown">
                        <img src={profile} alt="profile-avatar" className='profile-pic' />
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Perfil
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink className='nav-button-drop' to=''>Mi Perfil</NavLink>
                            </li>
                            <li>
                                <NavLink className='nav-button-drop' to=''>Logout</NavLink>
                            </li>
                        </ul>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}


export default Navbar;