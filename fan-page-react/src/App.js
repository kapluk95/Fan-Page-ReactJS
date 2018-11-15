import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ViewAlbums from './components/ViewAlbums';
import Favoritos from './components/Favoritos';
import Tracks from './components/Tracks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Switch>
              <Route path="/Home" component={Home} /> 
              <Route path="/Album" component={ViewAlbums} />
              <Route path="/Favoritos" component={Favoritos} />
              <Route path="/Canciones/:album/:idAlbum" component={Tracks} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
