import React from 'react'
import { useSiteData } from 'react-static'
import { Link } from '@reach/router'
import useMediaQuery from 'utils/useMediaQuery'

export default function Header ({ className = '', ...props }) {
  const { title, description } = useSiteData()
  const matches = useMediaQuery('(min-width: 640px)')
  return (
    <header className={`text-white md:mb-6 flex flex-wrap justify-between items-center ${className}`} {...props}>
      <Link to='/' className="flex items-center p-2">
        <img className="md:-mt-1 md:-mb-8 mx-2 w-20 md:w-24" src="/images/escudo-fullcolor.png" alt="Escudo guardianes" />
        <div className="ml-2">
          <h1 className="text-2xl">{title}</h1>
          <p>{description}</p>
        </div>
      </Link>
      <details open={matches}>
        <summary className="sm:hidden px-5 cursor-pointer pt-2 pb-4 text-base">Menú</summary>
        <nav className="flex flex-col sm:flex-row flex-wrap items-start pt-0 p-3 sm:space-x-3">
          <Link className="rounded-md mt-2 py-2 px-4 hover:bg-red-600 bg-red-500" to="/blog">Blog</Link>
          <Link className="rounded-md mt-2 py-2 px-4 hover:bg-red-600 bg-red-500" to="/dossier">Dossier</Link>
          <Link className="rounded-md mt-2 py-2 px-4 hover:bg-red-600 bg-red-500" to="/calendario">Calendario</Link>
          <Link className="rounded-md mt-2 py-2 px-4 hover:bg-red-600 bg-red-500" to="/contacto">Contacto</Link>
        </nav>
      </details>
    </header>
  )
}