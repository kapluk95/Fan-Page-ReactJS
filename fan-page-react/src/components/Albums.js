import React, { Component } from 'react';
import './Albums.scss';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
class Albums extends Component {
  render() {
    return (
      <div className="albums" key={shortid.generate()}>
        <h1 className="titleAlbum"> {this.props.name} </h1>
        <Link to={'/Canciones/'+(this.props.name)+"/"+(this.props.id)} ><img src={this.props.image}  className="picture" id={this.props.id}  /></Link> 
      </div>
    );
  }
}

export default Albums;
