import homeLogo from '../../assets/miscellaneous/home_logo.png';
import './Hero.scss';
import Scroller from './Scroller/Scroller';

const Hero = () => (
  <div id="home-section">
    <div className="logo-location">
      <img
        data-aos="fade"
        data-aos-duration={3000}
        src={homeLogo}
        alt="home_logo_img"
        id="home-logo"
      />
    </div>
    <div id="home-oxigen-text">
      <h4 data-aos="fade-right" data-aos-duration={3000}>
        OXIGENANDO
        <br />
        NUESTRO
        <br />
        PLANETA
      </h4>
      <Scroller />
    </div>
  </div>
);

export default Hero;
