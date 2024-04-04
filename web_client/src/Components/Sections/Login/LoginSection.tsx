import React from 'react'
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

  const urlParams = new URLSearchParams(window.location.search)
  const error = urlParams.get('error')
  let errorMessage = ''

  // TODO: More error codes
  switch (error) {
    case 'invalidCode':
      errorMessage = 'Invalid login provided!'
      break
    case 'networkError':
      errorMessage = 'Issue connecting to server'
      break
    case 'expired':
      errorMessage = 'Login expired! Please login again.'
      break
  }

  return (
    <ContentBox className="login-section">
      <RowHandler className="login-section--title">
        <Title text="Login" />
      </RowHandler>
      <RowHandler className="login-section--error">
        <p>{errorMessage}</p>
      </RowHandler>
      <RowHandler>
        <Button onClick={handleClick}>Login</Button>
      </RowHandler>
    </ContentBox>
  )
}

export default LoginSection
