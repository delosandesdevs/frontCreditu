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
  const topten = useSelector((state) => state.topten.slice(4, 11));
  const topthree = useSelector((state) => state.topten.slice(0, 3));
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    dispatch(getTenPlayers());
    if (isAuthenticated) dispatch(findOrCreateUser(user.name, user.email));

    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home_container">
      <div style={{ backgroundColor: 'white' }}>
        <Hero />
      </div>
      <TopPlayers topthree={topthree} topten={topten} />
      <PieChart />
    </div>
  );
};

export default Home;
