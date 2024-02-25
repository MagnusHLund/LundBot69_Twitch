import React from 'react'
import './SongRequestForm.scss'

interface ISongRequestForm {
  type: 'bans' | 'songs'
  className: string
}

const SongRequestForm: React.FC<ISongRequestForm> = ({ type, className }) => {
  return (
    <form className={className}>
      <input
        placeholder={type == 'bans' ? 'username' : 'Youtube video URL'}
        type="text"
        className={`${className}--input`}
      />
      <input
        type="submit"
        className={`${className}--submit`}
        value={type == 'bans' ? 'ban' : 'request'}
      />
    </form>
  )
}

export default SongRequestForm
