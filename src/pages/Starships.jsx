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
      <div className="starship-container">
        {results.map((starshipTitle) => (
          <Link  key= {starshipTitle.name} state= {{ starshipTitle }} to='/starship'>
            <div className='starship'>
              <div class='card'>
                <div class='card-body'>
                  <h3>{starshipTitle.name}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Starships