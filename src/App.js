// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
      <Routes>
          <Route path='/' element={<Home />} exact />
      </Routes>
    )
}

export default App;
