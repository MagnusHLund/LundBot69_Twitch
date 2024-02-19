import React from 'react'
import './Title.scss'

interface IHomeMusicRequestedBy {
  headerText?: string
  defaultName?: string
}

const HomeMusicRequestedBy: React.FC<IHomeMusicRequestedBy> = ({
  headerText = 'requested by:',
  defaultName = 'n/a',
}) => {
  return (
    <div className="requested-by">
      <h1>{headerText}</h1>
      <h1>{defaultName}</h1>
    </div>
  )
}

export default HomeMusicRequestedBy
