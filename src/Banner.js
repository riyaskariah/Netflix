import React, { useEffect , useState } from 'react'
import instance from './axios'
import requests from './request'
import './Banner.css'

function Banner() {
const [movie, setMovie] = useState([])
useEffect(()=>{
async function fetchData(){
    const request = await instance.get(requests.fetchNetflixOriginals)
    setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length-1)
    ])
}
fetchData()
},[])
//console.log("movie",movie);
function truncate(str,n){
return str?.length>n ? str.substr(0,n-1)+ "...." : str
}
  return (
    <header
    className='banner'
    style={{
        backgroundSize : "cover",
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition : "center center"
    }}>
<div className='banner_contents'>
    <h1 className='banner_title'>
        {movie.title || movie.name || movie.original_name}
    </h1>
<div className='banner_buttons'>
<button className='banner_button'>Play</button>
<button className='banner_button'>More Info</button>
</div>
<h1 className='banner_description'>
{truncate(movie.overview,150)}
</h1>
</div>
<div className='banner_fadebottom'>

</div>
    </header>
  )
}

export default Banner