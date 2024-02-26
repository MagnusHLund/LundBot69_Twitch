import React from 'react'
import './CommandsCreateForm.scss'
import InputForm from '../../../Content/InputForm'

interface ICommandsCreateForm {}

const CommandsCreateForm: React.FC<ICommandsCreateForm> = ({}) => {
  return (
    <InputForm
      title="Create command"
      initialValues={undefined}
      submitTitle="Create"
    >
      <input type="text" placeholder="Command name" />
      <p>Permission to use:</p>
      <select>
        <option>Everyone</option>
        <option>Follower</option>
        <option>Subscriber</option>
        <option>VIP</option>
        <option>Moderator</option>
        <option>Creator</option>
      </select>
    </InputForm>
  )
}

export default CommandsCreateForm
