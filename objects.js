
var playlist = new Object({ puth: 'gaye', ratm: 'revolver', pachelbel: 'canon' });
var artistName = "nacho"
var songTitle = "ramses"

function updatePlaylist(playlist, nacho, ramses) {
  return Object.assign({}, playlist, { [nacho]: ramses })
}

function removeFromPlaylist(playlist, puth) {
  return 
}