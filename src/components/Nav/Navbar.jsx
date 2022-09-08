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
import LoginButton from '../LoginControl/Login';
import LogoutButton from '../LoginControl/Logout';
import AdbIcon from '@mui/icons-material/Adb';
import { useState, useEffect } from 'react';
import juano from '../../assets/avatars/juano.png'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'
import { findOrCreateUser } from '../../redux/action'

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const userLogged = useSelector(store => store.loggedUser)
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(findOrCreateUser(user.name, user.email))
    }
  }, [isAuthenticated])

  useEffect(() => {
    checkIfHasPlayer()
  })


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

  const checkIfHasPlayer = () => {
    if (userLogged && !userLogged.player) return null
    else {
      return (
        <MenuItem onClick={handleCloseNavMenu} >
          <NavLinkCmp path={'create-player/'} title={'Crear Player'} action={''} />
        </MenuItem>
      )
    }
  }

  return <AppBar position="fixed"
    style={{
      backgroundColor: "#FEF1EE",
      color: "black"
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
            {checkIfHasPlayer()}
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
          {userLogged && userLogged.player === false
            ? <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLinkCmp path={'create-player/create'} title={'Crear Player'} action={''} />
            </Button>
            : null
          }
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
              <Avatar data-cy="login" alt={isAuthenticated ? user.name : "Juano_icon"} src={isAuthenticated ? user.picture : juano} />
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
              <Typography textAlign="center" component={'span'} variant={'body2'}>
                <NavLinkCmp path={'profile'} title={'Perfil'} />
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              {
                isAuthenticated ? <LogoutButton />
                  : <LoginButton data-cy="log" />
              }
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
}

export default Navbar;