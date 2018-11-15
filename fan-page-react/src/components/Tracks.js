import React, { Component } from 'react';
import './Tracks.scss';
import shortid from 'shortid';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap/lib/';
class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      discNumber:0
    };
  }
  
   componentDidMount() {
    axios.get('http://localhost:3001/api/albums/tracks')
      .then(response => {
        switch (this.props.match.params.idAlbum) {
          case  "43otFXrY0bgaq5fB3GrZj6":
            this.setState(() => ({ discNumber: 0}));  
            break;
          case  "5wZtSIvijWCMc1vlPFqAyB":
            this.setState(() => ({ discNumber: 1}));  
            break;
          case  "7xl50xr9NDkd3i2kBbzsNZ":
            this.setState(() => ({ discNumber: 2}));  
            break;
          case  "7xl50xr9NDkd3i2kBbzsNZ0":
            this.setState(() => ({ discNumber: 3}));  
            break;
          case  "1jWKVgnHX8nwR551hQNx5K":
            this.setState(() => ({ discNumber: 4}));  
            break;
          case  "6deiaArbeoqp1xPEGdEKp1":
            this.setState(() => ({ discNumber: 5}));  
            break;
          case  "0fLhefnjlIV3pGNF9Wo8CD":
            this.setState(() => ({ discNumber: 6}));  
            break;
          case  "2Y9IRtehByVkegoD7TcLfi":
            this.setState(() => ({ discNumber: 7}));  
            break;
          case  "74cQBDmkkzRBntR064f0SD":
            this.setState(() => ({ discNumber: 8}));  
            break;
          case  "2rQ135imvelvp89D8eEZOi":
            this.setState(() => ({ discNumber: 9}));  
            break;
          case  "30Perjew8HyGkdSmqguYyg":
            this.setState(() => ({ discNumber: 10}));  
            break;
          case  "1oOkcBu5bgkUzZTvKD1m8z":
            this.setState(() => ({ discNumber: 11}));  
            break;
          case  "3rHJQrfEcBeSaLPuLwKR6F":
            this.setState(() => ({ discNumber: 12}));  
            break;
          case  "10Oqhoq2akSJnurJOPk8xT":
            this.setState(() => ({ discNumber: 13}));  
            break;
        }
        this.setState(() => ({ tracks: response.data[this.state.discNumber].items }));                            
      })
      .catch(error => {
        console.log(error);
      });
    } 
    render() {
      return (
        <div className="canciones">
        <h1> {this.props.match.params.album } </h1>
          {  
            this.state.tracks.map(song => {
              return (
                  <div className="listGroup" key={shortid.generate()}>
                    <ListGroup  >
                      <ListGroupItem className="listSong">
                        <a href={song.external_urls.spotify}>
                          <i className="fab fa-spotify fa-1x"></i>
                        </a>
                        <span className="titleSong"> {song.name} </span>
                        
                        <div className="reproductor">
                          <audio src={song.preview_url} className="reproductor"controls="controls" type="audio/mpeg" preload="none"></audio>
                        </div>
                        <div className="icons">
                          <i className="fas fa-retweet"></i>
                          <i className="far fa-heart"></i>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
              );
            })
          }
        </div>
      );
  }
}

export default Tracks;
