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
        className="commands-form--name"
      />
      <p className="commands-form--permission">Permission to use:</p>
      <select className="commands-form--permission-select">
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
        className="commands-form--cooldown-title"
      />
      <Inline className="commands-form--cooldown-inline">
        <div>
          <p className="commands-form--cooldown-inline-title">Same user</p>
          <input
            type="text"
            placeholder="Cooldown"
            className="commands-form--cooldown-inline-input"
          />
        </div>
        <div>
          <p className="commands-form--cooldown-inline-title">Global</p>
          <input
            type="text"
            placeholder="Cooldown"
            className="commands-form--cooldown-inline-input"
          />
        </div>
      </Inline>
      <Inline className="commands-form--mix-inline">
        <div>
          <p className="commands-form--mix-inline-cost-title">Command cost</p>
          <input
            type="text"
            placeholder="Cost"
            className="commands-form--mix-inline-cost-input"
          />
        </div>
        <div>
          <p className="commands-form--mix-inline-repeat-title">
            Repeat (minutes)
          </p>
          <input
            type="text"
            placeholder="repeat every..."
            className="commands-form--mix-inline-repeat-input"
          />
        </div>
      </Inline>
      <p className="commands-form--output-title">Command output</p>
      <input
        type="text"
        placeholder="output"
        className="commands-form--output-input"
      />
    </InputForm>
  )
}

export default CommandsCreateForm
