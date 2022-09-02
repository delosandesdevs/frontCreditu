import './Navbar.scss'
import logo from '../../assets/miscellaneous/logo.png'
import profile from '../../assets/avatars/profile.png'
import NavLinkCmp from './NavLink/NavLinkCmp'
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
import { useState } from 'react';
import juano from '../../assets/avatars/juano.png'

const Navbar = () => {
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

    return <AppBar position="fixed" 
    style={{
        backgroundColor:"#FEF1EE",
        color:"black"
        }}
    >
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'            
          }}
        >
          <img src={logo} alt="logo_nav" id='logo-nav' />
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }              
            }}
          >
              <MenuItem onClick={handleCloseNavMenu} >
                <NavLinkCmp path={''} title={'Inicio'} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} >
                <NavLinkCmp path={'create-player'} title={'Crear Player'} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} >
                <NavLinkCmp path={'ranking'} title={'Ranking'} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} >
                <NavLinkCmp path={'about'} title={'Acerca de'} />
              </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="logo_nav" id='logo-nav' />
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLinkCmp path={''} title={'Inicio'} />
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLinkCmp path={'create-player'} title={'Crear Player'} />
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLinkCmp path={'ranking'} title={'Ranking'} />
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLinkCmp path={'about'} title={'Acerca de'} />
            </Button>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Juano_icon" src={juano} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                    <NavLinkCmp path={'profile'} title={'Perfil'} />
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Salir de sesión</Typography>
              </MenuItem>
            
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
} 
    
    
    
    
    
    // <div className='nav navbar navbar-expand-lg'>
    //     <div className="container-fluid">
    //         {/* <a class="navbar-brand" href="#">Navbar</a> */}
    //         <div className="collapse navbar-collapse navw" id="navbarSupportedContent">
    //         <img src={logo} alt="logo_nav" />
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <NavLinkCmp path={''} title={'Inicio'} />
    //         <NavLinkCmp path={'create-player'} title={'Crear Player'} />
    //         <NavLinkCmp path={'ranking'} title={'Ranking'} />
    //         <NavLinkCmp path={'about'} title={'Acerca de'} />                    
    //             <div>
    //                 <div className="dropdown">
    //                     <img src={profile} alt="profile-avatar" className='profile-pic' />
    //                     <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                         Perfil
    //                     </button>
    //                     <ul className="dropdown-menu">
    //                         <li>
    //                             <NavLinkCmp path={'profile'} title={'Perfil'} />                    
    //                         </li>
    //                         <li>
    //                             Logout
    //                         </li>
    //                     </ul>                        
    //                 </div>                    
    //             </div>
    //         </div>
    //     </div>
    // </div>



export default Navbar;