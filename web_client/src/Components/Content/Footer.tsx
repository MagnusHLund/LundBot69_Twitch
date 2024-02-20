import React from 'react'
import './Footer.scss'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = ({}) => {
  return (
    <div className="footer">
      <p className="footer--text">LUNDBOT69 - Magnus Lund</p>
      <a href="https://github.com/MagnusHLund/LundBot69_Twitch" target="_">
        <img src="Github.png" alt="Github logo" className="footer--link" />
      </a>
    </div>
  )
}

export default Footer
