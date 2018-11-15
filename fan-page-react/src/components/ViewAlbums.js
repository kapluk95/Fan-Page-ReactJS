import React, { Component } from 'react';
import shortid from 'shortid';
import Albums from './Albums';
import axios from 'axios';

class ViewAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []

    };
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/albums')
      .then(response => {
        this.setState(() => ({ albums: response.data[0].items }));
      })
      .catch(error => {
        console.log(error);
      });
  } 

  render() {
    return (
      <section>
      {
        this.state.albums.map(album=>{
          return(
          <Albums name={album.name} image={album.images[1].url} id={album.id} key={shortid.generate()}/>
          )
        })
      }
      </section>
    );
  }
}
export default ViewAlbums;
