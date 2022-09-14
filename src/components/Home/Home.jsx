import { useEffect } from 'react';
import './Home.scss';
import Aos from 'aos';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import PieChart from '../Charts/PieChart';
import TopPlayers from '../TopPlayers/TopPlayers';
import Hero from '../Hero/Hero';
import 'aos/dist/aos.css';

import { findOrCreateUser, getTenPlayers } from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const topPlayers = useSelector((state) => state.topten.slice(0, 10));
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    dispatch(getTenPlayers());
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line 
  }, []);

  useEffect(() => {
    if (isAuthenticated) dispatch(findOrCreateUser(user.name, user.email));
  }, [isAuthenticated]);

  return (
    <div className="home_container">
      <div style={{ backgroundColor: 'white' }}>
        <Hero />
      </div>
      <TopPlayers topten={topPlayers} />
      <PieChart />
    </div>
  );
};

export default Home;
