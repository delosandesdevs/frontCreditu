import './Admin.scss'
import { NavLink, Outlet } from 'react-router-dom'
import Menu from './Menu/Menu';

const Admin = () => {
    return <div >
        <div className="admin-menu">
            <Menu />            
        </div>         
        
        <div className="admin-panel">
        <div className="admin-charts">
            <Outlet />
        </div>
        </div>
    </div>
}

export default Admin;