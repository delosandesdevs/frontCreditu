// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import User from './components/User/User'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/user' element={<User />} />
    </Routes>
  )
}

export default App;
