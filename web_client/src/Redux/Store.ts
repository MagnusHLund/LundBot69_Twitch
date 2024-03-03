import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers/Reducers'

const store = configureStore({
  reducer: rootReducer,
})

export default store
