import React from 'react'
import styled from 'styled-components'

const CONTAINER_WIDTH = 812;

const SocialStyles = styled.div`
  a {
    padding: 12px 8px;
    display: inline-block;
  }

  a:hover {
    opacity: 0.75;
  }

  img {
    width: 1.5rem;
  }

  @media (max-width: ${CONTAINER_WIDTH}px) {
    &.home {
      position: absolute;
      top: 0;
      right: 4px;
    }
  }
`

const Social = ({ className }) => (
  <SocialStyles className={`social ${className || ''}`}>
    <a title="@asoguardianes" href="https://twitter.com/asoguardianes" target="_blank">
      <img src="/images/iconos-rrss/twitter.svg" alt="twitter" />
    </a>
    <a title="Guardianes Sevilla" href="https://www.facebook.com/Guardianes-Sevilla-758918664213908/" target="_blank">
      <img src="/images/iconos-rrss/facebook.svg" alt="facebook" />
    </a>
    <a title="@asoguardianes" href="https://instagram.com/asoguardianes" target="_blank">
      <img src="/images/iconos-rrss/instagram.svg" alt="instagran" />
    </a>
    <a title="guardianes_esports" href="https://www.twitch.tv/guardianes_esports" target="_blank">
      <img src="/images/iconos-rrss/twitch.svg" alt="twitch" />
    </a>
    <a title="asociacion.guardianes@gmail.com" href="mailto:asociacion.guardianes@gmail.com" target="_blank">
      <img src="/images/iconos-rrss/mail.svg" alt="mail" />
    </a>
  </SocialStyles>
)

export default Social
