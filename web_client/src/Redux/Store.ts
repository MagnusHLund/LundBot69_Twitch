import { combineReducers, configureStore } from '@reduxjs/toolkit'
import videoPlayerReducer from './Reducers/VideoPlayerReducer'
import loginReducer from './Reducers/LoginReducer'
import settingsReducer from './Reducers/SettingsReducer'

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
