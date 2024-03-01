import React from 'react'
import './SongRequestForm.scss'
import InputForm from '../../../Content/InputForm'

interface ISongRequestForm {
  type: 'bans' | 'songs'
  className: string
}

const SongRequestForm: React.FC<ISongRequestForm> = ({ type, className }) => {
  return (
    <InputForm
      className={className}
      title={`add ${type}`}
      titleFontSize="20px"
      initialValues={undefined}
    >
      <input
        placeholder={type == 'bans' ? 'username' : 'Youtube video URL'}
        type="text"
        className={`${className}--input`}
      />
    </InputForm>
  )
}

export default SongRequestForm
