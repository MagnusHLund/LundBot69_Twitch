import React from 'react'
import './Conditions.scss'
import Inline from './Inline'

interface IConditionsProps {}

// TODO: This is a version 2 feature. Multipliers and earning points, based on conditions

const Conditions: React.FC<IConditionsProps> = ({}) => {
  return (
    <form>
      <Inline>
        <p>If a</p>
        <select>
          <option value="viewer">viewer</option>
          <option value="follower">follower</option>
          <option value="subscriber">subscriber</option>
          <option value="VIP">VIP</option>
          <option value="moderator">moderator</option>
        </select>
        <select>
          <option>chats</option>
          <option>follows</option>
          <option>raids</option>
          <option>buys sub</option>
        </select>
        <p>they get</p>
        <input type="text" placeholder="points" />
      </Inline>
    </form>
  )
}

export default Conditions
