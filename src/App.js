import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Starships from './pages/Starships';
import StarshipDetails from './pages/StarshipDetails'
import './App.css';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Starships />}/>
        <Route path='/starship-details' element={<StarshipDetails />}/>
      </Routes>
    </>
  )
}

export default App;
