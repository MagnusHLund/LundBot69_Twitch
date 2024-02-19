import React from 'react'
import './HomeMusicInfo.scss'

interface IHomeMusicInfo {
  headerText: 'Requested by:' | 'Song title:'
  defaultName?: string
  fontSize?: string
}

const HomeMusicInfo: React.FC<IHomeMusicInfo> = ({
  headerText = '',
  defaultName = 'n/a',
  fontSize = '20px',
}) => {
  // TODO: Make this inline, if the music box is small. Also decrease text size, when small.
  return (
    <div className="requested-by">
      <h1 style={{ fontSize: fontSize }}>{headerText}</h1>
      <h1 style={{ fontSize: fontSize }}>{defaultName}</h1>
    </div>
  )
}

export default HomeMusicInfo
