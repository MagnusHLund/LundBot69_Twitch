import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Default from './Components/Default'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Default />
      </BrowserRouter>
    </>
  )
}

export default App
