interface VideoPlayerAction {
  type: string
  payload: object
}

const initialState = {
  videoId: '9vMLTcftlyI',
  isPlaying: true,
  player: null,
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
    case 'TOGGLE_PLAY_PAUSE':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }
    default:
      return state
  }
}

export default videoPlayerReducer
