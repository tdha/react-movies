import './MovieCard.css';

function MovieDetailPage({ posterPath, title, releaseDate}) {
    return (
        <div className='movieCard'>
            <h2 className='movieTitle'>{title}</h2>
            <p className='movieReleaseDate'>{releaseDate}</p>
            <div 
                className='movieBackground'
                style={{ backgroundImage: `url(${posterPath})` }}>
            </div>
        </div>
    );
}

export default MovieDetailPage