const baseUrl = 'https://swapi.dev'

export function getAllStarships() {
  return fetch(`${baseUrl}/api/starships/`)
    .then(res => res.json())
}

export function getDetails(apiUrl) {
  return fetch(`${baseUrl}${apiUrl}`)
    .then(res => res.json())
}