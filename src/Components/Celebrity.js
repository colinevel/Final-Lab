import React from 'react';

export default function Celebrity({celeb, getClickedCelebrity}) {

    return (
        <div onClick={getClickedCelebrity}>
            <li>{celeb.name}</li>
            <li><img src={`https://image.tmdb.org/t/p/w185${celeb.profile_path}`} alt="celeb name"/></li>
        </div>
    )
}
