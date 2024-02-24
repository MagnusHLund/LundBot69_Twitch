import React from 'react'
import './CommandsEditForm.scss'

interface ICommandsEditForm {
  text: string
  fontSize?: string
}

const CommandsEditForm: React.FC<ICommandsEditForm> = ({
  text,
  fontSize = '20px',
}) => {
  return (
    <h1 style={{ fontSize: fontSize }} className="title">
      {text}
    </h1>
  )
}

export default CommandsEditForm
