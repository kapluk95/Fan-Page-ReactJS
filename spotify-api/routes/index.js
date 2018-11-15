'use strict'

const express = require('express');
const api = express.Router();

const artistCtrl = require('../controllers/artist');
api.get('/artist', artistCtrl.getArtistInfo);

const albumsCtrl = require('../controllers/albums');
api.get('/albums', albumsCtrl.getAlbums);

const tracksCtrl = require('../controllers/tracks');
api.get('/albums/tracks', tracksCtrl.getTracks);

module.exports = api;