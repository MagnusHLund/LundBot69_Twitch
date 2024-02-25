import React from 'react'
import './GamblingAddSubtractPoints.scss'

interface IGamblingAddSubtractPoints {}

const GamblingAddSubtractPoints: React.FC<
  IGamblingAddSubtractPoints
> = ({}) => {
  //TODO: I keep adding the same styling to these forms. Should just use components instead.
  return (
    <form>
      <input type="text" placeholder="Username" />
      <select>
        <option>subtract</option>
        <option>add</option>
      </select>
      <input type="text" placeholder="Points" />
      <input type="submit" />
    </form>
  )
}

export default GamblingAddSubtractPoints
