import { combineReducers, configureStore } from '@reduxjs/toolkit'
import videoPlayerReducer from './Reducers/VideoPlayerReducers'

export interface RootState {
  videoPlayer: ReturnType<typeof videoPlayerReducer>
}

const rootReducer = combineReducers({
  videoPlayer: videoPlayerReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
