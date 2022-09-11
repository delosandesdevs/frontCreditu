import { NavLink } from 'react-router-dom';

const NavLinkCmp = ({ path, title, action }) => (
  <div className="container-nav-button">
    {action === 'edit' ? (
      <NavLink
        to={`/${path}/edit`}
        className="nav-button"
        style={{ color: 'white' }}
      >
        {title}
      </NavLink>
    ) : (
      <NavLink to={`/${path}`} className="nav-button">
        {title}
      </NavLink>
    )}
  </div>
);

export default NavLinkCmp;
