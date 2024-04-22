import './App.css';
import Landing from './pages/landing/landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register/register';
import Home from './pages/home/home';
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
