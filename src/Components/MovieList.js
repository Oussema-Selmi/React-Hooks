import React from 'react'
import MovieCard from './MovieCard'

function MovieList({MovieData, textFilter, ratingFilter}) {
   
    return (
        <div className="MovieList">
        {MovieData.filter((Movie)=>Movie.title.toLowerCase().includes(textFilter.toLowerCase().trim())
        && Movie.rating>=ratingFilter).map((Movie)=>(
         <MovieCard Movie={Movie} key={Movie.id} />
        ))}
        </div>
    )
}

export default MovieList
