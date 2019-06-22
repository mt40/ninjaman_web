import React from 'react'
import './DivImg.css'

interface DivImgProps {
  url: string
  className?: string
}

const DivImg: React.FC<DivImgProps> = (props) => {
  const cssUrl = `url("${props.url}")`
  const defaultSize = 'is_50x100'
  const cls = defaultSize + ' ' + props.className

  return (
    <div className={cls}>
      <div className='DivImg'
           style={{backgroundImage: cssUrl, height: '100%', width: '100%'}}/>
    </div>
  )
}

export default DivImg
