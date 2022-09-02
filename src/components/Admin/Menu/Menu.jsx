import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AdminMenu = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return <div className='admin-menu'>
        {/* <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <MenuList>
                <ListItemText>
                    <MenuItem>
                        Menú
                    </MenuItem>
                </ListItemText>
                <NavLink to={'players'} className="admin-menu-item">
                    <MenuItem>
                        <ListItemText>
                            <span class="material-symbols-outlined">photo_camera</span>
                        </ListItemText>
                        <ListItemText>
                            Player / Fotos
                        </ListItemText>
                    </MenuItem>
                </NavLink>
                <NavLink to={'renewed-air'} className="admin-menu-item">
                    <MenuItem>
                        <ListItemText>
                            <span class="material-symbols-outlined">air</span>
                        </ListItemText>
                        <ListItemText>
                            Aire Renovado
                        </ListItemText>
                    </MenuItem>
                </NavLink>
                
                <NavLink to={'sellings'} className="admin-menu-item">
                    <MenuItem>
                        <ListItemText>
                            <span class="material-symbols-outlined">payments</span>
                        </ListItemText>
                        <ListItemText>
                            Ventas Semillas
                        </ListItemText>
                    </MenuItem>
                </NavLink>
                
                <NavLink to={'users'} className="admin-menu-item">
                    <MenuItem>
                        <ListItemText>
                            <span class="material-symbols-outlined">group</span>
                        </ListItemText>
                        <ListItemText>
                            Usuarios
                        </ListItemText>
                    </MenuItem>
                </NavLink>

            </MenuList>
        </Paper> */}

        <AppBar position="static" style={{backgroundColor:"#093438"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="span"                        
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor:"default",
                            marginRight:"60px"
                        }}
                    >
                        <span class="material-symbols-outlined">admin_panel_settings</span>
                        PANEL ADMIN
                    </Typography>

                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <NavLink to={'players'} className="admin-menu-item">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <div className="centered-line">
                                    <span class="material-symbols-outlined">photo_camera</span>
                                    <span>Player / Fotos</span>
                                </div>
                            </Button>
                        </NavLink>
                        <NavLink to={'renewed-air'} className="admin-menu-item">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <div className="centered-line">
                                    <span class="material-symbols-outlined">air</span>
                                    <span>Aire renovado</span>
                                </div>
                            </Button>
                        </NavLink>
                        <NavLink to={'users'} className="admin-menu-item">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <div className="centered-line">
                                    <span class="material-symbols-outlined">group</span>
                                    <span>Usuarios</span>
                                </div>
                            </Button>
                        </NavLink>
                    </Box>
                    
                    

                  
                </Toolbar>
            </Container>
        </AppBar>

    </div>
}

export default AdminMenu;