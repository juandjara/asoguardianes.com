import React from 'react'
import styled from 'styled-components'

const BackgroundImageStyles = styled.div`
  background-size: cover;
  background-position: center;
  background-image: ${props => `url('${props.image}')`};
`

export default function BackgroundImage({ children, src, ...props }) {
  return (
    <BackgroundImageStyles image={src} {...props}>
      {children}
    </BackgroundImageStyles>
  )
}