import React from 'react'
import './DivImg.css'

interface DivImgProps {
  url: string
  className?: string
  width?: number | string
  height?: number | string
  fallbackColor?: string
  sizeContain?: boolean
  children?: any
  verticalCentered?: boolean
  dimmed?: boolean
  /** This only works if container has display flex with column direction */
  fullScreen?: boolean
}

const DivImg: React.FC<DivImgProps> = (props) => {
  const [loaded, setLoaded] = React.useState(false)

  const size = () => {
    if(props.fullScreen) {
      return {
        width: 'auto',
        height: 'auto',
      }
    }
    return {
      width: props.width
        ? props.width
        : props.height ? 'auto' : '100px',
      height: props.height
        ? props.height
        : props.width ? 'auto' : '100px',
    }
  }

  const cls = `DivImg ${ props.className }`

  const onImageLoaded = () => {
    if (!loaded) setLoaded(true)
  }

  const defaultBgColor = props.fallbackColor ? props.fallbackColor : 'rgba(0, 0, 0, 0.11)'
  const bgSize = props.sizeContain ? 'contain' : 'cover'

  const img = `url("${ props.url }")`

  const dimmer = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
  const dimmed = `${dimmer}, ${img}`

  return (
    <div className={ cls }>
      <div className='img'
           style={ {
             backgroundImage: props.dimmed ? dimmed : img,
             backgroundColor: defaultBgColor,
             backgroundSize: bgSize,
             alignItems: props.verticalCentered ? 'center' : 'normal',
             ...size(),
           } }
           onLoad={ onImageLoaded }>
        {props.children}
      </div>
    </div>
  )
}

export default DivImg
