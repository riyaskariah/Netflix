import React, { useEffect , useState } from 'react'
import instance from './axios'
import './Row.css'
const base_url= "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
  
  const [ movies, setMovies ] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData()
  },[])

  console.log("Data is:",movies);
console.log(isLargeRow);
  return (
    <div className = "row">
       <h2>{title}</h2>
       <div className = "row__posters">
        { movies.map((movie) => (
          <img 
          key = {movie.id}
          className ={`row__poster ${isLargeRow && "row__posterLarge"}`}
          alt = {movie.name}
          src = {`${base_url}${isLargeRow ?  movie.poster_path : movie.backdrop_path}`} />
        ))}
        </div>
    </div>
  )
}

export default Row