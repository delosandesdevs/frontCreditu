// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import User from './components/User/User'
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer'
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import Ranking from './components/Ranking/Ranking';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Players from './components/Admin/Charts/Players/Players';
import RenewedAir from './components/Admin/Charts/RenewedAir/RenewedAir';
import Sellings from './components/Admin/Charts/Sellings/Sellings';
import Users from './components/Admin/Charts/Users/Users';
import ChatbotContainer from './components/Chatbot/ChatbotContainer'

function App() {

  return <>
    <div style={{ marginBottom: "70px" }}>
      <Navbar />
    </div>
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/user' element={<User />} />
      <Route path='/create-player/:action' element={<CreatePlayer />} />
      <Route path='/ranking' element={<Ranking />} />
      <Route path='/profile' element={<Profile />}>
        {/* <Route index path='players' element={<Players />} />
        <Route path='renewed-air' element={<RenewedAir />} />
        <Route path='sellings' element={<Sellings />} />
        <Route path='users' element={<Users />} /> */}
      </Route>
      <Route path='/about' element={<About />} />
    </Routes>
    <ChatbotContainer />
    <Footer />
  </>
}

export default App;
