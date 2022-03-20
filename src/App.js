import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Starships from './pages/Starships';
import StarshipDetails from './pages/StarshipDetails'
import NavBar from './pages/NavBar';
import './App.css';

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships />}/>
        <Route path='/starship' element={<StarshipDetails />}/>
      </Routes>
    </>
  )
}

export default App;
