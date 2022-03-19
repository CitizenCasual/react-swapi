import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getDetails } from '../services/sw-api'

const StarshipPage = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    getDetails(location.state.starshipDetails.url)
      .then(starshipDetails => setStarshipDetails(starshipDetails))
  })

  return (
    <div className='starship-details'>
      <p>{starshipDetails.name}</p>
    </div>
  )
}

export default StarshipPage