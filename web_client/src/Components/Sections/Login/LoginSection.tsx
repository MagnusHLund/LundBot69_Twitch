import React, { useEffect } from 'react'
import './LoginSection.scss'
import ContentBox from '../../Content/ContentBox'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import Button from '../../Inputs/Button'
import twitchScopes from '../../../Utils/TwitchScopes'

const LoginSection: React.FC = () => {
  const handleClick = () => {
    const scopeParam = twitchScopes().join('+')
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${import.meta.env.VITE_TWITCH_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_TWITCH_REDIRECT_URI}&response_type=code&scope=${scopeParam}`
  }

  const handleAuth = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')

    if (token) {
      //dispatch(thunkAction(token))
    }
  }

  useEffect(() => {
    handleAuth()
  }, [])

  // TODO: hide navbar on login page
  return (
    <ContentBox className="login-section">
      <RowHandler className="login-section--title">
        <Title text="Login" />
      </RowHandler>
      <RowHandler>
        <Button onClick={handleClick}>Login</Button>
      </RowHandler>
    </ContentBox>
  )
}

export default LoginSection
