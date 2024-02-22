import React from 'react'
import './Commands.scss'
import CommandsTableSection from '../Sections/Commands/CommandsTableSection'
import CommandsCreateSection from '../Sections/Commands/CommandsCreateSection'

const Commands: React.FC = () => {
  return (
    <>
      <CommandsTableSection />
      <CommandsCreateSection />
    </>
  )
}

export default Commands
