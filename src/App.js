// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import User from './components/User/User'
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer'
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import Ranking from './components/Ranking/Ranking';
import About from './components/About/About';

function App() {
  return <>
  <Navbar />
    <Routes>
      <Route path='/home' element={<Home />} exact />
      <Route path='/user' element={<User />} />
      <Route path='/create-player' element={<CreatePlayer />} />
      <Route path='/ranking' element={<Ranking />} />
      <Route path='/about' element={<About />} />
    </Routes>
    
  <Footer />
  </>
}

export default App;
