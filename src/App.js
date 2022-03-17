import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Starships from './pages/Starships';
import './App.css';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Starships />}/>
      </Routes>
    </>
  )
}

export default App;
