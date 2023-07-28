
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer'
import { Women } from './pages/Women/Women'
import { Men } from './pages/Men/Men';
import { Heritage } from './pages/Heritage/Heritage';
import Care from './pages/Care/Care';
import { Collection } from './pages/Collection/Collection';
import { Respons } from './pages/Respons/Respons';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/women' element={<Women />}/>
          <Route path='/men' element={<Men />}/>
          <Route path='/heritage' element={<Heritage />}/>
          <Route path='/care' element={<Care />}/>
          <Route path='/collection' element={<Collection />}/>
          <Route path='/respons' element={<Respons />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
