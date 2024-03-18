import { movies } from '../../data';
import ActorsCard from '../../components/ActorsCard/ActorsCard';
import './ActorsListPage.css';

function ActorListPage() {
    const castArrays = movies.map(function(movie) {
        return movie.cast;
    })

    const allActors = castArrays.reduce(function(accumulator, currentCast) {
        return accumulator.concat(currentCast);
    })

    const uniqueActors = Array.from(new Set(allActors));

    return (
        <div className='actorsListContainer'>
            <h1>ActorListPage</h1>
            <div className='actorsGrid'>
                {uniqueActors.map((actor, index) => (
                    <ActorsCard key={index} name={actor} />
                ))}
            </div>
        </div>
    );
}

export default ActorListPage;