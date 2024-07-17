import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/layout/Navbar.js'
import Container from './components/layout/Container.js';

import Fandom from './pages/Fandom.js';
import Explore from './pages/Explore.js';
import Category from './pages/Category.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass='min_height'>
      <Routes>
        <Route exact path='/' element='home'/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/category/:id' element={<Category />}/>
        <Route path='/fandom/:id' element={<Fandom />}/>
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
