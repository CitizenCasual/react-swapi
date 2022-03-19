import React, { useState, useEffect } from "react"
import { getAllStarships } from "../services/sw-api"
import { Link } from 'react-router-dom'
// import StarshipPage from "./StarshipPage"

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
          <Link  key={starshipTitle.name} state={{ starshipTitle }} to='/starship-details'>
            <div className='starship'>
              <h3>{starshipTitle.name}</h3>
            {/* <StarshipPage /> */}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Starships