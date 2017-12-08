
var playlist = new Object({ puth: 'gaye', ratm: 'revolver', pachelbel: 'canon' });

function updatePlaylist(playlist, nacho, ramses) {
  return Object.assign({}, playlist, { [nacho]: ramses })
}

function removeFromPlaylist(playlist, puth) {
  delete playlist[puth];
}