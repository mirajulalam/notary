import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import EditTask from './components/EditTask/EditTask';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PagenotFound from './components/PagenotFound/PagenotFound';
import Tasklist from './components/Tasklist/Tasklist';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tasklist' element={<Tasklist/>}/>
        <Route path='/edit/:id' element={<EditTask/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='*' element={<PagenotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
