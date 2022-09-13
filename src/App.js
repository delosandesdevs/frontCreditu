import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import User from './components/User/User';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import Ranking from './components/Ranking/Ranking';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import ChatbotContainer from './components/Chatbot/ChatbotContainer';

const App = () => (
  <>
    <div style={{ marginBottom: '70px' }}>
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/user" element={<User />} />
      <Route path="/create-player/:action" element={<CreatePlayer />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <ChatbotContainer />
    <Footer />
  </>
);

export default App;
