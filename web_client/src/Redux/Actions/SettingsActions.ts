export const setMusicVolume = (volume: number) => ({
  type: 'SET_MUSIC_VOLUME',
  payload: volume,
})

export const setEffectsVolume = (volume: number) => ({
  type: 'SET_EFFECTS_VOLUME',
  payload: volume,
})

export const setPinnedMessage = (message: string) => ({
  type: 'SET_PINNED_MESSAGE',
  payload: message,
})

export const setBotIsEnabled = (isEnabled: boolean) => ({
  type: 'SET_BOT_ENABLED',
  payload: isEnabled,
})

export const setSongRequestIsEnabled = (isEnabled: boolean) => ({
  type: 'SET_SONG_REQUEST_ENABLED',
  payload: isEnabled,
})

export const setGamblingIsEnabled = (isEnabled: boolean) => ({
  type: 'SET_GAMBLING_ENABLED',
  payload: isEnabled,
})

export const setAutoShoutOutIsEnabled = (isEnabled: boolean) => ({
  type: 'SET_AUTO_SHOUTOUT_ENABLED',
  payload: isEnabled,
})
