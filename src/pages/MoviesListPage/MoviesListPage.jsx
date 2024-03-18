import { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

function MoviesListPage({ movies }) {
    console.log(movies);
    return (
        <div className="container">
            {movies.map((movie, index) => (
            <MovieCard
                key={index}
                posterPath={movie.posterPath}
                title={movie.title}
                releaseDate={movie.releaseDate}
            />
            ))}
        </div>
    );
}

export default MoviesListPage