  function getArtistInfo(req, res) {  
    res.status(200).send([
        {
            artists: [
              {
                external_urls: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
                followers:"8842540",
                genres: [
                  "alternative rock",
                  "funk metal",
                  "permanent wave",
                  "post-grunge",
                  "rock"
                ],
                href: "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
                id: "0L8ExT028jH3ddEcZwqJJ5",
                images: "https://i.scdn.co/image/5b2072e522bf3324019a8c2dc3db20116dff0b87",
                name: "Red Hot Chili Peppers",
                popularity: 85,
                type: "artist",
                uri: "spotify:artist:0L8ExT028jH3ddEcZwqJJ5"
              }
            ]
        }
    ])

  }
  
  module.exports = {
    getArtistInfo
  };
///////////////////////////////////////////////////////////
