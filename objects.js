
var playlist = new Object({ puth: 'gaye', ratm: 'revolver', pachelbel: 'canon' });
var artistName = "nacho"
var songTitle = "ramses"

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

