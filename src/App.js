// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import User from './components/User/User'
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer'
import CreatePlayer from './components/CreatePlayer/CreatePlayer';

function App() {
  return <>
  <Navbar />
    <Routes>
      <Route path='/home' element={<Home />} exact />
      <Route path='/user' element={<User />} />
      <Route path='/create-player' element={<CreatePlayer />} />
    </Routes>
    
  <Footer />
  </>
}

export default App;
