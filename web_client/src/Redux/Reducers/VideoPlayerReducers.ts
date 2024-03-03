import { setPlayer } from './../Actions/VideoPlayerActions'
interface VideoPlayerAction {
  type: string
  payload: object
}

interface VideoPlayerState {
  videoId: string
  isPlaying: boolean
}

const initialState = {
  videoId: '9vMLTcftlyI',
  isPlaying: false,
}

const videoPlayerReducer = (
  state = initialState,
  action: VideoPlayerAction,
) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return {
        ...state,
        player: action.payload,
      }
    case 'SET_VIDEO_STATE':
      return {
        ...state,
        ...action.payload,
      }
    case 'IS_VIDEO_PLAYING':
      return {}
    default:
      return state
  }
}

export default videoPlayerReducer
