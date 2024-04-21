import './App.css';
import Landing from './pages/landing/landing';
import {BrowserRouter as Router} from 'react-router-dom'
import Register from './pages/register/register';
function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
