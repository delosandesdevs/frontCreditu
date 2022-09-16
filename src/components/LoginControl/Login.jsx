import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      sx={{
        my: 2,
        color: '#0f5156',
        display: 'block',
        backgroundColor: '#fe9c84'
      }}
      onClick={() => loginWithRedirect()}
    >
      Iniciar Sesion
    </Button>
  );
};

export default LoginButton;