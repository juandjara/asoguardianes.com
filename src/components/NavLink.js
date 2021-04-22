import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { MenuContext } from 'components/Nav'
import useIsMobile from 'utils/useIsMobile'

export default function NavLink(props) {
  const menu = useContext(MenuContext)
  const isMobile = useIsMobile()

  function handleClick () {
    if (menu.current && isMobile) {
      menu.current.open = false
    }
  }

  return <Link {...props} onClick={handleClick} />
}
