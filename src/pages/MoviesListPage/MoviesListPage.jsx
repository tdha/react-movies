import { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";

function MoviesListPage({ movies }) {
    console.log(movies);
    return (
        <div className="container">
            {movies.map((movie, index) => (
                <Link to={`/movies/${encodeURIComponent(movie.title)}`} key={index} style={{ textDecoration: 'none' }}>
                <MovieCard
                key={index}
                posterPath={movie.posterPath}
                title={movie.title}
                releaseDate={movie.releaseDate}
            />
            </Link>
            ))}
        </div>
    );
}

export default MoviesListPage