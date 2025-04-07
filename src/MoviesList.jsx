import React, { useState } from 'react';

const MoviesList = () => {
    const initialMovies = [
        { id: 1, title: 'The Shawshank Redemption', genre: 'Drama', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
        { id: 2, title: 'The Godfather', genre: 'Crime', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.' },
        { id: 3, title: 'The Dark Knight', genre: 'Action', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.' },
        { id: 4, title: 'Pulp Fiction', genre: 'Crime', description: 'The lives of several individuals in Los Angeles intertwine in a tale of violence and redemption.' },
        { id: 5, title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.' },
        { id: 6, title: 'The Good, the Bad and the Ugly', genre: 'Western', description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.' },
        { id: 7, title: 'Inception', genre: 'Action', description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.' },
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [showDetails, setShowDetails] = useState({});
    const [showAll, setShowAll] = useState(true);

    const toggleDetails = (id) => {
        setShowDetails(prevDetails => ({
            ...prevDetails,
            [id]: !prevDetails[id]
        }));
    };

    const removeMovie = (id) => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    };

    const toggleView = () => {
        setShowAll(prevShowAll => !prevShowAll);
    };

    const filteredMovies = showAll ? movies : movies.filter(movie => movie.genre === 'Action');

    return (
        <div>
            <button onClick={toggleView}>{showAll ? 'Show Action Movies' : 'Show All Movies'}</button>
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        <span onClick={() => toggleDetails(movie.id)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                        {showDetails[movie.id] && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;