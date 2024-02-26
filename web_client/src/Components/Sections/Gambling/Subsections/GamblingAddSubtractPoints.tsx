import React from 'react'
import './GamblingAddSubtractPoints.scss'
import InputForm from '../../../Content/InputForm'

interface IGamblingAddSubtractPoints {}

const GamblingAddSubtractPoints: React.FC<
  IGamblingAddSubtractPoints
> = ({}) => {
  return (
    <InputForm
      title={'Add or subtract points'}
      initialValues={{ username: '', select: 'Subtract', points: '' }}
    >
      <input type="text" placeholder="Username" name="username" />
      <select name="select">
        <option>Subtract</option>
        <option>Add</option>
      </select>
      <input type="text" placeholder="Points" name="points" />
    </InputForm>
  )
}

export default GamblingAddSubtractPoints
