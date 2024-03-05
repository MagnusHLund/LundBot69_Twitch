export const setShouldVideoPlay = () => ({
  type: 'VIDEO_PLAY_STATE',
})

export const videoTitle = (title: string) => ({
  type: 'VIDEO_TITLE',
  payload: title,
})

export const videoDuration = (duration: string) => ({
  type: 'VIDEO_DURATION',
  payload: duration,
})

export const videoTimeStamp = (duration: string) => ({
  type: 'VIDEO_TIME_STAMP',
  payload: duration,
})
