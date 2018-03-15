export function getRedirectPath(){
  // user.type /boss/genius
  // user.avatar /bossinfo/geniusinfo
  let url = (type==='boss') ? './boss' : '/genius'
  if(avatar) {
    url += 'info'
  }
  return url
}
