import React from 'react';
import './AlbumDetail.scss';
// import axios from 'axios';

class AlbumDetail extends React.Component {
    _isMounted = false;

    // state = {genre: ''};

    // getGenre = async () => {

    //     const response3 = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${this.props.album.genre_id}`);
    //     // console.log(response3);
    //     if(this._isMounted) {
    //         this.setState({genre: response3.data.name});
    //     }
    // }

    componentDidMount() {
        this._isMounted = true;
        // this.getGenre();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {   
            return (
    
                <div className="wrap column col-3 col-md-6 col-xs-12">
    
                    {/* assign album img as bg card img */}
                    {/* <div className="card" style={styleS}> */}
                    <div className="card">
                        
                        <div className="card-image">
                            <img src={this.props.album.cover_big} alt={this.props.album.title} className="img-responsive" />
                        </div>
                        <div className="card-header">
                            <span className="chip">Type: {this.props.album.record_type}</span>
                            {/* <span className="chip">Genre: {this.state.genre}</span> */}
                            <div className="card-title h5">{this.props.album.title}</div>
                            <div className="card-subtitle text-gray">Released: {this.props.album.release_date}</div>
                        </div>
                    </div>
                    
                </div>      
                
            );
    }
}

export default AlbumDetail;