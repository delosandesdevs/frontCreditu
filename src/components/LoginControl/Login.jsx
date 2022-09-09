import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Typography textAlign="center" onClick={() => loginWithRedirect()}>
      Iniciar Sesion
    </Typography>
  );
};

export default LoginButton;
