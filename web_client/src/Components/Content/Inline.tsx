import React from 'react'
import './Inline.scss'

interface IInlineProps {
  children: React.ReactNode
  className?: string
  // TODO: More props, for flex distancing and whatever else would be nice
}

const Inline: React.FC<IInlineProps> = ({ children, className }) => {
  return <div className={`inline--comp ${className}`}>{children}</div>
}

export default Inline
