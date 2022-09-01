import { NavLink } from "react-router-dom";

const NavLinkCmp = ({path, title}) => {
    return  <div className='container-nav-button'>
    <NavLink to={`/${path}`} className="nav-button">{title}</NavLink>
</div>
}

export default NavLinkCmp;