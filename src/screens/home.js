import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './library';  // Adjust the path
import Feed from './feed';  // Adjust the path
import Trending from './trending';  // Adjust the path
import Player from './player';  // Adjust the path
import Favourite from './favourite';  // Adjust the path
import './home.css';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar/>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      </div>
    </Router>
  );
}
