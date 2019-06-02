import React from 'react';
import './AlbumsCollection.scss';
import AlbumDetail from './AlbumDetail';

const AlbumsCollection = (props) => {


    const displayAlbums = props.albums.map((album) => {

        if(album.record_type === "album") {

        return (
            <a className="change-colour" href={album.link} target="_blank" rel="noopener noreferrer" key={Math.random()}>
                <AlbumDetail album={album}/>
            </a>
        )        
        }

    })

    return (
        <div>{displayAlbums}</div>
    )
}

export default AlbumsCollection;