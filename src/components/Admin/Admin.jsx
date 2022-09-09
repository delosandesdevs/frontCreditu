import './Admin.scss';
import { Outlet } from 'react-router-dom';
import Menu from './Menu/Menu';

const Admin = () => (
  <div>
    <div className="admin-menu">
      <Menu />
    </div>

    <div className="admin-panel">
      <div className="admin-charts">
        <Outlet />
      </div>
    </div>
  </div>
);

export default Admin;
