import React from 'react'
import './CommandsForm.scss'
import InputForm from '../../../Content/InputForm'
import Title from '../../../Content/Title'
import Inline from '../../../Content/Inline'
import Button from '../../../Inputs/Button'

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
      <Title text="Command cooldown (seconds)" fontSize="15px" />
      <Inline>
        <div>
          <p>Same user</p>
          <input type="text" placeholder="Cooldown" />
        </div>
        <div>
          <p>Global</p>
          <input type="text" placeholder="Cooldown" />
        </div>
      </Inline>
      <Inline>
        <div>
          <p>Command cost</p>
          <input type="text" placeholder="Cost" />
        </div>
        <div>
          <p>Repeat (minutes)</p>
          <input type="text" placeholder="repeat every..." />
        </div>
      </Inline>
      <p>Command output</p>
      <input type="text" placeholder="output" />
    </InputForm>
  )
}

export default CommandsCreateForm
