import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { Routes, Route} from 'react-router-dom';
import AlbumById from './pages/AlbumById';
import SignUp from './pages/SignUp';

import './assets/css/App.css';

function App() {


  return (
    <div className="App">
        <Routes >

            <Route path="/" element={<HomePage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/album/:id" element={<AlbumById />}></Route>
            
            
        </Routes>
 </div>
  )
}

export default App;
