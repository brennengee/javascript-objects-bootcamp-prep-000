
var playlist = new Object({ puth: 'gaye', ratm: 'revolver', pachelbel: 'canon' });
var artistName = "nacho"
var songTitle = "ramses"

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { nacho: 'ramses'})
  return playlist
}

