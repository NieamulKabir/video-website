import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Video from './pages/Video';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
          
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
