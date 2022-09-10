import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button sx={{ my: 2, color: '#4F8844', display: 'block' }} onClick={() => loginWithRedirect()}>
      Iniciar Sesion
    </Button>
  );
};

export default LoginButton;
