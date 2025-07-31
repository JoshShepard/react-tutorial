function Card(props) {
    return (
        <div className="card">
            <img alt="Kakashi Hatake" src={props.profilePic} className="card-image" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.description}</p>
        </div>
    );
}

export default Card;