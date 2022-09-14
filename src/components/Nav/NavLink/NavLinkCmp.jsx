import { NavLink } from 'react-router-dom';

const NavLinkCmp = ({ path, title, action }) => (
  <div className="container-nav-button">
    {action === 'edit' ? (
      <NavLink
        to={`/${path}/edit`}
        className="nav-button centered-line"
        style={{ color: 'white' }}
      >
        {title}
        <span class="material-symbols-outlined">draw</span>
      </NavLink>
    ) : (
      <NavLink to={`/${path}`} className="nav-button centered-line">
        {title}
        
      </NavLink>
    )}
  </div>
);

export default NavLinkCmp;
