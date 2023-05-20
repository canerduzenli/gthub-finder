import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/index.css';
import Search from './components/Search';
import User from './components/User'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/User/:username" element={<User />} />
        <Route path="*" element={<Search />} /> {/* Wildcard route */}

      </Routes>
    </div>
  );
}

export default App;
