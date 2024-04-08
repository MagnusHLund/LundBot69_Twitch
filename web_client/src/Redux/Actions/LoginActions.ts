import axios from 'axios'
import { baseApiUrl } from '../../Utils/BaseUrl'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const setTwitchCode = createAsyncThunk(
  'session/setTwitchCode',
  async (code: string, { dispatch }) => {
    const url: string = `${baseApiUrl()}/v1/twitch/connectUser`

    try {
      const response = await axios.post(
        url,
        { code },
        { withCredentials: true },
      )
      // This does not work. Will hopefully fix tomorrow. does not get put into the state.
      dispatch({ type: 'SET_SESSION_TOKEN', payload: response.data.token })
      window.location.href = '/home'
    } catch (error) {
      console.log(error)
      window.location.href = '/login?error=connectionError'
    }
  },
)
