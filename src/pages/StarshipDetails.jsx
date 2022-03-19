import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getStarshipDetails } from '../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starshipTitle.url)
      .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return (
    <div className='details-container'>
      {starshipDetails.name ? 
      <>
        <div className='starship-details'>
        <p>Name: {starshipDetails.name}</p>
        <p>Model: {starshipDetails.model}</p>
        <Link to='/'>
          Return
        </Link>
      </div>
      </>
      :
      <>
        <p>Loading starship details...</p>
      </>
      }
    </div>
  )
}

export default StarshipDetails