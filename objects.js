
var playlist = new Object({ puth: 'gaye', ratm: 'revolver', pachelbel: 'canon' });

function updatePlaylist(playlist, nacho, ramses) {
  Object.assign({}, playlist, { nacho: 'ramses'})
  return playlist
}

