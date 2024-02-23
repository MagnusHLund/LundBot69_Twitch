import React from 'react'
import './LoginSection.scss'
import ContentBox from '../../Content/ContentBox'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import LoginErrorText from './Subsections/LoginErrorText'
import LoginForm from './Subsections/LoginForm'

const LoginSection: React.FC = () => {
  // TODO: hide navbar on login page
  return (
    <ContentBox className="login-section">
      <RowHandler className="login-section--title">
        <Title text="Login" />
      </RowHandler>
      <div className="login-section--content">
        <RowHandler className="login-section--content--error">
          <LoginErrorText text="THIS IS AN ERROR MESSAGE" />
        </RowHandler>
        <RowHandler>
          <LoginForm className="login-section--content--form" />
        </RowHandler>
      </div>
    </ContentBox>
  )
}

export default LoginSection
