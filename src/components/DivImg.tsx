import React from 'react'
import './DivImg.css'

interface DivImgProps {
  url: string
  className?: string
  width?: number
  height?: number
  fallbackColor?: string
  sizeContain?: boolean
}

const DivImg: React.FC<DivImgProps> = (props) => {
  const [loaded, setLoaded] = React.useState(false)

  const cssUrl = `url("${ props.url }")`
  const width = props.width
    ? props.width
    : props.height ? 'auto' : '100px'
  const height = props.height
    ? props.height
    : props.width ? 'auto' : '100px'
  const cls = `DivImg ${ props.className }`

  const onImageLoaded = () => {
    if (!loaded) setLoaded(true)
  }

  const defaultBgColor = props.fallbackColor ? props.fallbackColor : 'rgba(0, 0, 0, 0.11)'
  const bgSize = props.sizeContain ? 'contain' : 'cover'

  return (
    <div className={ cls }>
      <div className='img'
           style={ {
             backgroundImage: cssUrl,
             height: height,
             width: width,
             backgroundColor: defaultBgColor,
             backgroundSize: bgSize
           } }
           onLoad={ onImageLoaded }/>
    </div>
  )
}

export default DivImg
