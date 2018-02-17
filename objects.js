var playlist = {}
playlist['Shakira'] = 'Hips don/`t lie'
function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, { [artist]: song})
}

updatePlaylist(playlist, 'James Brown', 'I got you')

