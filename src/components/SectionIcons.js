import React from 'react'
import dataService from '../../dataService'
import { Link } from '@reach/router'
import styled from 'styled-components'

const SectionIconsStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 24px 32px;
  justify-content: center;
  align-content: center;
  margin: 24px 32px;

  li {
    text-align: center;
    text-transform: uppercase;
    box-sizing: content-box;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: opacity 0.25s ease;
  }

  li:hover img {
    opacity: 0.75;
  }

  img {
    display: block;
    width: 75px;
    height: auto;
    margin: 0 auto;
  }
`

const SectionIcons = ({ items, className }) => (
  <SectionIconsStyles className={`animate__bounceInUp animate__animated section-icons ${className}`}>
    {items.map(c => (
      <li key={c.id}>
        <Link to={dataService.collectionToLink(c)}>
          <img src={dataService.makeImageUrl(c.icon, 'system-small-cover')} />
          <p>{c.title}</p>
        </Link>
      </li>
    ))}
  </SectionIconsStyles>
)

export default SectionIcons
