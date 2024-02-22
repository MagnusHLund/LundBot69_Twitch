import React from 'react'
import './ContentBox.scss'

interface IContentBoxProps {
  children?: React.ReactNode
  minWidth?: string
  minHeight?: string
  className?: string
  border?: string
}

// TODO: If content boxes had a title, then i would not need a title component as a child of each content box. What a stupid design.

const ContentBox: React.FC<IContentBoxProps> = ({
  children,
  minWidth = '34%',
  minHeight = '0px',
  className = '',
  border = '1px 1px 1px 1px solid black',
}) => {
  const [
    borderWidthTop,
    borderWidthRight,
    borderWidthBottom,
    borderWidthLeft,
    borderStyle,
    borderColor,
  ] = border.split(' ')

  return (
    <div
      className={`content-box ${className}`}
      style={{
        minHeight: minHeight,
        minWidth: minWidth,
        borderTopWidth: borderWidthTop,
        borderRightWidth: borderWidthRight,
        borderBottomWidth: borderWidthBottom,
        borderLeftWidth: borderWidthLeft,
        borderStyle: borderStyle,
        borderColor: borderColor,
      }}
    >
      {children}
    </div>
  )
}

export default ContentBox
