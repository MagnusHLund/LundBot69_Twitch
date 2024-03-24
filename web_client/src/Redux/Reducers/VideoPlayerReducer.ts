import { IAction } from '../IAction'

interface IVideoPlayerState {
  videoId: string
  videoTitle: string
  videoTimeStamp: string
  videoDuration: string
  isPlaying: boolean
  userMovingVideoSlider: boolean
}

const initialState: IVideoPlayerState = {
  videoId: '9vMLTcftlyI',
  isPlaying: false,
  videoTitle: 'n/a',
  videoDuration: '0',
  videoTimeStamp: '0',
  userMovingVideoSlider: false,
}

const videoPlayerReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'CHANGE_VIDEO_PLAY_STATE':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }
    case 'SET_VIDEO_TITLE':
      return {
        ...state,
        videoTitle: action.payload,
      }
    case 'SET_VIDEO_DURATION':
      return {
        ...state,
        videoDuration: action.payload,
      }
    case 'SET_VIDEO_TIME_STAMP':
      return {
        ...state,
        videoTimeStamp: action.payload,
      }
    case 'SET_USER_MOVING_VIDEO_SLIDER':
      return {
        ...state,
        userMovingVideoSlider: action.payload,
      }
    default:
      return state
  }
}

export default videoPlayerReducer
