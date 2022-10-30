import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Tasklist from './components/Tasklist/Tasklist';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tasklist' element={<Tasklist/>}/>
      </Routes>
    </div>
  );
}

export default App;
