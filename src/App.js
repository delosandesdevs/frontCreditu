import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import Ranking from './components/Ranking/Ranking';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import ChatbotContainer from './components/Chatbot/ChatbotContainer';

const App = () => {
  const userLogged = useSelector((store) => store.loggedUser);
return (
  <>
    <div style={{ marginBottom: '70px' }}>
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/create-player/:action" element={Array.isArray(userLogged) ?  <Home /> :  <CreatePlayer /> } />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <ChatbotContainer />
    <Footer />
  </>
)};

export default App;
