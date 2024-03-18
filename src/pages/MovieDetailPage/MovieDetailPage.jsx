import { useParams } from "react-router-dom";
import { movies } from '../../data';

function MovieDetailPage() {
    const { movieName } = useParams();
    const movie = movies.find(movie => movie.title === movieName);

    return movie ? (
        <div className="movieCard">
            <h2 className="movieTitle">{movie.title}</h2>
            <p className="movieReleaseDate">{movie.releaseDate}</p>
            <img src={movie.posterPath} alt={movie.title} className="moviePoster" />
            <p className="movieCast">{movie.cast.join(',')}</p>
        </div>
    ) : <p>Movie not found.</p>;
} 

export default MovieDetailPage