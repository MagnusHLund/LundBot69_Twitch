import React from 'react'
import './CommandsPage.scss'
import CommandsTableSection from '../Sections/Commands/CommandsTableSection'
import CommandsFormSection from '../Sections/Commands/CommandsFormSection'

const CommandsPage: React.FC = () => {
  return (
    <>
      <CommandsTableSection />
      <CommandsFormSection />
    </>
  )
}

export default CommandsPage
