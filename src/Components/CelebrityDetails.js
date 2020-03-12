import React from 'react';

export default function CelebrityDetails({details}) {

    const movieArray = details.known_for;

    return (
        movieArray ? (

        <div className="details">
            <img src={`https://image.tmdb.org/t/p/w185${details.profile_path}`} alt="celeb name"/>
            <h2>{details.name}</h2>
            <h3>Known For</h3>
            <ul>{movieArray && movieArray.map((movie, index) => (
                <div>
                <h2 key={index}>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="movie name"/>
                </div>
            ))}
            </ul>
        </div>
        ) : (
            ""
        )
    )
}
