import React from 'react'
import './SongRequestRefresh.scss'
import Button from '../../../Inputs/Button'
import Inline from '../../../Content/Inline'

interface ISongRequestRefresh {
  type?: 'bans' | 'songs'
}

const SongRequestRefresh: React.FC<ISongRequestRefresh> = ({ type }) => {
  return (
    <Inline className="refresh">
      <Button
        isWhite={true}
        hint="Refresh the data for this table"
        className="refresh--button"
        width="35px"
        height="35px"
      />
      <div>
        <p className="refresh--text">00:00:00</p>
      </div>
    </Inline>
  )
}

export default SongRequestRefresh
