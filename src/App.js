import './App.css';
import Navbar from './Components/Navigation/Navbar';
import Home from './Pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './Pages/About';
import Donation from './Pages/Donation';
import Future from './Pages/Future';
import Past from './Pages/Past';
import Categories from './Pages/Categories';
import Category from './Pages/Category';
import Create from './Pages/Create';
import Sign from './Pages/Sign';
import Voting from './Pages/Voting';
import Nominate from './Pages/Nominate';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='donate' element={<Donation/>} />
        <Route path='future' element={<Future/>} />
        <Route path='past' element={<Past/>} />
        <Route path='categories' element={<Categories/>} />
        <Route path='categories/:category' element={<Category/>}/>
        <Route path='create' element={<Create/>} />
        <Route path='sign' element={<Sign/>} /> 
        <Route path='voting' element={<Voting/>}/>
        <Route path='nominate' element={<Nominate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
