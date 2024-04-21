import axios from 'axios'
import { baseApiUrl } from '../../Utils/BaseUrl'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

export const setTwitchCode = createAsyncThunk<string, string>(
  'session/setTwitchCode',
  async (code: string, { dispatch }) => {
    const navigate = useNavigate()
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

      // Navigate to /home
      navigate('/home')

      return token
    } catch (error) {
      window.location.href = '/login?error=connectionError'
    }
  },
)
