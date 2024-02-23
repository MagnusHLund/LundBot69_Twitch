import React from 'react'
import './CommandsPage.scss'
import CommandsTableSection from '../Sections/Commands/CommandsTableSection'
import CommandsCreateSection from '../Sections/Commands/CommandsCreateSection'

const CommandsPage: React.FC = () => {
  return (
    <>
      <CommandsTableSection />
      <CommandsCreateSection />
    </>
  )
}

export default CommandsPage
