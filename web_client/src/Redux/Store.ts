import { combineReducers, configureStore, Action } from '@reduxjs/toolkit'
import videoPlayerReducer from './Reducers/VideoPlayerReducer'
import loginReducer from './Reducers/LoginReducer'
import settingsReducer from './Reducers/SettingsReducer'
import { ThunkDispatch } from 'redux-thunk'

export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>

export interface RootState {
  videoPlayer: ReturnType<typeof videoPlayerReducer>
}

const rootReducer = combineReducers({
  videoPlayer: videoPlayerReducer,
  login: loginReducer,
  settings: settingsReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
