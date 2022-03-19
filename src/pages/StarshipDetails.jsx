import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getStarshipDetails } from '../services/sw-api'

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starshipTitle.url)
      .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return (
    <div className='starship-details'>
      <p>hella</p>
      <p>{starshipDetails.name}</p>
    </div>
  )
}

export default StarshipDetails