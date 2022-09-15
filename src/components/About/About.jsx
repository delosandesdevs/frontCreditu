import { useEffect } from 'react';
import Aos from 'aos';
import threeLogo from '../../assets/miscellaneous/three_white.png';
import aboutLogo from '../../assets/miscellaneous/logo_white.png';
import './About.scss';
import Avatar from '../Avatar/Avatar';
import Title from '../Title/Title';
import phone from '../../assets/miscellaneous/phone.png';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    // eslint-disable-next-line 
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="about">
      <div className="about_container">
        <Title text="Acerca de" />
        <div className="about_logo">
          <img src={threeLogo} alt="three_logo_img" className="three-logo" />
          <img src={aboutLogo} alt="home_logo_img" className="about-logo" />
        </div>
        <div
          className="about-text_container"
          data-aos="fade-up"
          data-testid="about"
        >
          <div className="text">
            <p style={{fontWeight:"300"}}>
            <img src={phone} alt="" id='phone-img'/>
              Atravesamos constantemente una lucha ecológica para evitar
              destruir el planeta de nuestros hijos, y desde nuestra posición
              quisimos ayudar a cambiar esto de manera lúdica e
              innovadora.
          <br />
              Free Forest es un juego de simulación donde deberás cuidar los
              bosques reduciendo el dióxido de carbono, para evitar el calentamiento global 
              y así salvar nuestro planeta. 
              <br />           
              Elegirás una zona para reforestar con tu Player, les darás sol, regarás, lo cuidarás de
              plagas y aprenderás datos de árboles super curiosos en la
              aplicación interactuando con otros jugadores de manera online.
              
              <br />
              Puedes experimentar con comprar nutrientes para tu bosque para que
              crezcan velozmente, adquirir boosts y mejoras para tu Player, y todas las recaudaciones seran
              destinadas para plantar árboles en la vida real.
              <br />

              Free Forest ya ha colaborado con la plantación de más de 1.000 árboles, y con tu 
              participación podremos ir aumentando la renovación del oxígeno en nuestro planeta.              
            </p>
          </div>
        </div>
        <div className="about-team">
          <h1 className="about-team-title">DESARROLLADORES FREE FOREST</h1>
          <div className="about-team-avatar">
            <Avatar pic="rami" displayName="Rami" />
            <Avatar pic="gian" displayName="Gian" />
            <Avatar pic="juano" displayName="Juano" />
            <Avatar pic="rodri" displayName="Rodri" />
            <Avatar pic="flor" displayName="Flor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
