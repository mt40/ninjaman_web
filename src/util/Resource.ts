export const getImage = (name: string, ext: string = 'png') => {
  return `/images/${ name }.${ ext }`
}

export const isMobile = () => {
  const userAgent = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent)
  const width = window.innerWidth < 480
  return userAgent || width
}
