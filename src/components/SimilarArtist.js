import React from 'react';
import './SimilarArtist.scss';


const SimilarArtist = (props) => {

    const research = (name) => {
        console.log(name);
        props.search(name);
    }

    const renderArtists = props.artists.map((artist) => {
        return (
                
            <span className="chip" onClick={() => research(artist.name)} key={Math.random()}>
                {artist.name}
            </span>
             
        )
    })

    return (
        <div className="similar-artist">
            {renderArtists}
        </div>
    )

}

export default SimilarArtist;