import axios from 'axios'
import { baseApiUrl } from '../../Utils/BaseUrl'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const setTwitchCode = createAsyncThunk<string, string>(
  'session/setTwitchCode',
  async (code: string) => {
    const url: string = `${baseApiUrl()}/v1/twitch/connectUser`

    try {
      const response = await axios.post(
        url,
        { code },
        { withCredentials: true },
      )
      return response.data.token
    } catch (error) {
      console.log(error)
      window.location.href = '/login?error=connectionError'
    }
  },
)
