import React from 'react'
import './CommandsCreateForm.scss'

interface ICommandsCreateForm {
  text: string
  fontSize?: string
}

const CommandsCreateForm: React.FC<ICommandsCreateForm> = ({
  text,
  fontSize = '20px',
}) => {
  return (
    <h1 style={{ fontSize: fontSize }} className="title">
      {text}
    </h1>
  )
}

export default CommandsCreateForm
