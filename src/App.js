import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/layout/Navbar.js'
import Container from './components/layout/Container.js';

import Story from './pages/Story.js'
import Review from './pages/Review.js'
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
        <Route path='/story/:id' element={<Story />}/>
        <Route path='/story/:id/reviews' element={<Review />}/>
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
