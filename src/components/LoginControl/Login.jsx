import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button sx={{ my: 2, color: '#0f5156', display: 'block', backgroundColor: "#fe9c84" }} onClick={() => loginWithRedirect()}>
      Iniciar Sesion
    </Button>
  );
};

export default LoginButton;


// .btn-ff {
//   background-color: #fe9c84;
//   color: black;
//   width: 130px;
//   height: 55px;
//   border-radius: 4px;
//   margin: 20px;
//   box-shadow: rgba(0, 0, 0, 0.233) 0px 10px 15px -3px;
// }

// .btn-ff:hover {
//   background-color: #bb6853;
//   color: white;
//   width: 130px;
//   height: 55px;
//   border-radius: 4px;
//   margin: 20px;
//   transition: 0.8s;
// }