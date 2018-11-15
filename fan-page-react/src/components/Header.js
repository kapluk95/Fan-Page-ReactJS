import React, { Component } from 'react';
import './Header.scss';
import portada from './portada.jpg';
import axios from 'axios';
import { NavLink} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/artist')
      .then(response => { 
        this.setState(() => ({ artists: response.data[0].artists[0] }));
      })
      .catch(error => {
        console.log(error);
      });
  } 
  render() {
    return (
      <header>
        <nav>
          <div>
            <img src={portada} className="portada" />
            <div className="datosArtista">
              <h1>{this.state.artists.name}</h1>
              <h4>Followers: {this.state.artists.followers}</h4>
              <a href={this.state.artists.external_urls}><i className="fab fa-spotify fa-3x"></i></a>
            </div>
            <ul className="navsButtons">
              <li className="nav-item">
              <NavLink to="/Home"><button className="button">Home</button></NavLink> 
              </li>
              <li className="nav-item">
              <NavLink to="/Album"><button className="button">Albums</button></NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/Favoritos"><button className="button">Mis Favoritos</button></NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )    
  }
}

export default Header;