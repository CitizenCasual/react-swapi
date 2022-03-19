import React, { useState, useEffect } from "react"
import { getAllStarships } from "../services/sw-api"
import { Link } from 'react-router-dom'

const Starships = (props) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    getAllStarships()
      .then(starships => setResults(starships.results))
  }, [])

  return (
    <>
      <h3>All Starships</h3>
      <div className="starship-container">
        {results.map((starshipTitle) => (
          <Link  key={starshipTitle.index} state={{ starshipTitle }} to='/starship'>
            <div className='starship'>
            {starshipTitle.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Starships