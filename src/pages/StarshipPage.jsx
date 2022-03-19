import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const StarshipPage = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  return (
    <div className='starship-details'>
      <p>{starshipDetails.name}</p>
    </div>
  )
}

export default StarshipPage