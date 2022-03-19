import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../services/sw-api'

const StarshipPage = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    getDetails(location.state.starshipTitle.url)
      .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return (
    <div className='starship-details'>
      <p>hella</p>
    </div>
  )
}

export default StarshipPage