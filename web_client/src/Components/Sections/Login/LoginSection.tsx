import React from 'react'
import './LoginSection.scss'
import ContentBox from '../../Content/ContentBox'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
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
          <Title text="THIS IS AN ERROR MESSAGE" fontSize="15px" />
        </RowHandler>
        <RowHandler>
          <LoginForm className="login-section--content--form" />
        </RowHandler>
        <RowHandler>
          <p className="login-section--content--no-account">
            Dont have an account? Too bad.
          </p>
        </RowHandler>
      </div>
    </ContentBox>
  )
}

export default LoginSection
