import './Navbar.scss'
import logo from '../../assets/miscellaneous/logo.png'
import profile from '../../assets/avatars/profile.png'
import NavLinkCmp from './NavLink/NavLinkCmp'

const Navbar = () => {
    return <div className='nav navbar navbar-expand-lg'>
        <div className="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <div className="collapse navbar-collapse navw" id="navbarSupportedContent">
            <img src={logo} alt="logo_nav" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLinkCmp path={''} title={'Inicio'} />
            <NavLinkCmp path={'create-player'} title={'Crear Player'} />
            <NavLinkCmp path={'ranking'} title={'Ranking'} />
            <NavLinkCmp path={'about'} title={'Acerca de'} />                    
                <div>
                    <div className="dropdown">
                        <img src={profile} alt="profile-avatar" className='profile-pic' />
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Perfil
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLinkCmp path={'profile'} title={'Perfil'} />                    
                            </li>
                            <li>
                                Logout
                            </li>
                        </ul>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}


export default Navbar;