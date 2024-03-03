export const setPlayer = (player) => ({
  type: 'SET_PLAYER',
  payload: player,
})

export const setVideoState = (videoState) => ({
  type: 'SET_VIDEO_STATE',
  payload: videoState,
})

export const isVideoPlaying = (state) => ({
  type: 'IS_VIDEO_PLAYING',
  payload: state,
})
