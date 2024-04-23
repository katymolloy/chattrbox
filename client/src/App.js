import './App.css';
import Landing from './pages/landing/landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register/register';
import Home from './pages/home/home';
import Login from './pages/login/login';
import { useState } from 'react';

function App() {
const [name, setName] = useState('');
const [username, setUsername] = useState('')

const updateInfo = (name, user) =>{
  setName(name)
  setUsername(user)
}

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login onDataChange={updateInfo} />} />
        <Route path='/register' element={<Register onDataChange={updateInfo}/>} />
        <Route path='/home' element={<Home currName={name} currUser={username}/>} />
      </Routes>
    </Router>
  );
}

export default App;
