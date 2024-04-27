import axios from 'axios'
import { baseApiUrl } from '../../Utils/BaseUrl'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const setTwitchCode = createAsyncThunk<string, string>(
  'session/setTwitchCode',
  async (code: string, { dispatch }) => {
    const url: string = `${baseApiUrl()}/v1/twitch/connectUser`

    try {
      const response = await axios.post(
        url,
        { code },
        { withCredentials: true },
      )
      const token = response.data.token

      // Dispatch the SET_SESSION_TOKEN action here
      dispatch({ type: 'SET_SESSION_TOKEN', payload: token })

      return token
    } catch (error) {
      window.location.href = '/login?error=connectionError'
    }
  },
)
