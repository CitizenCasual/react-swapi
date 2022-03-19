import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Starships from './pages/Starships';
import StarshipPage from './pages/StarshipPage'
import './App.css';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Starships />}/>
        <Route path='/starship-details' element={<StarshipPage />}/>
      </Routes>
    </>
  )
}

export default App;
