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
      className="commands-form"
    >
      <input
        type="text"
        placeholder="Command name"
        className="commands-form--input"
      />
      <p className="commands-form--text">Permission to use:</p>
      <select className="commands-form--select">
        <option>Everyone</option>
        <option>Follower</option>
        <option>Subscriber</option>
        <option>VIP</option>
        <option>Moderator</option>
        <option>Creator</option>
      </select>
      <Title
        text="Command cooldown (seconds)"
        fontSize="15px"
        className="commands-form--title overline"
      />
      <Inline className="commands-form--inline">
        <div>
          <p className="commands-form--text">Same user</p>
          <input
            type="text"
            placeholder="Cooldown"
            className="commands-form--input"
          />
        </div>
        <div>
          <p className="commands-form--text">Global</p>
          <input
            type="text"
            placeholder="Cooldown"
            className="commands-form--input"
          />
        </div>
      </Inline>
      <Inline className="commands-form--inline overline">
        <div>
          <p className="commands-form--text">Command cost</p>
          <input
            type="text"
            placeholder="Cost"
            className="commands-form--input"
          />
        </div>
        <div>
          <p className="commands-form--text">Repeat (minutes)</p>
          <input
            type="text"
            placeholder="repeat every..."
            className="commands-form--input"
          />
        </div>
      </Inline>
      <p className="commands-form--text">Command output</p>
      <input
        type="text"
        placeholder="output"
        className="commands-form--input"
      />
    </InputForm>
  )
}

export default CommandsCreateForm
