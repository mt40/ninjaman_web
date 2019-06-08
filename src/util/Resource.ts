export const getImage = (name: string, ext: string = "png") => {
  return `/images/${name}.${ext}`
}