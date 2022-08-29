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
                    <NavLink to='' className="nav-button">Home</NavLink>
                </div>
                <div className='container-nav-button'>
                    <NavLink to='' className="nav-button">Create</NavLink>
                </div>
                <div className='container-nav-button'>
                    <NavLink to='' className="nav-button">About</NavLink>
                </div>



                <div className=''>
                    <div className="dropdown">
                        <img src={profile} alt="profile-avatar" className='profile-pic' />
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </button>
                        <ul className="dropdown-menu">
                            <NavLink className='nav-button-drop' to=''>My Profile</NavLink>
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}


export default Navbar;