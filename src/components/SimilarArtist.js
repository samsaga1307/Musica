import React from 'react';
import './SimilarArtist.scss';


const SimilarArtist = (props) => {

    const renderArtists = props.artists.map((artist) => {
        return (
                <a href={artist.link} target="_blank" rel="noopener noreferrer"><span className="chip" key={Math.random()}>{artist.name}</span></a>
        )
    })

    return (
        <div className="similar-artist">
            {renderArtists}
        </div>
    )

}

export default SimilarArtist;