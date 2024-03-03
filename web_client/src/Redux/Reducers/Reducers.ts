import { combineReducers } from 'redux'
import videoPlayerReducer from './VideoPlayerReducers'

const rootReducer = combineReducers({
  videoPlayer: videoPlayerReducer,
})

export default rootReducer
