import './ActorsCard.css';

function ActorsCard({ name }) {
    const imageBg = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
    return (
        <div className="actorCard" style={{ backgroundImage: `url(${imageBg})` }}>
            <h2>{name}</h2>
        </div>
    );
}

export default ActorsCard;