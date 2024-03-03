import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Navigation/Layout'
import { Provider } from 'react-redux'
import store from './Redux/Store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
