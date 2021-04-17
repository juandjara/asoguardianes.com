import React from 'react'
import { useSiteData } from 'react-static'
import { Link } from '@reach/router'

export default function Header ({ className = '', ...props }) {
  const { title, description } = useSiteData()
  return (
    <header className={`text-white flex flex-wrap justify-between items-start ${className}`} {...props}>
      <Link to='/' className="flex p-2">
        <img className="mx-2 w-20" src="/images/escudo-fullcolor.png" alt="Escudo guardianes" />
        <div className="ml-3">
          <h1 className="text-2xl mt-2">{title}</h1>
          <p>{description}</p>
        </div>
      </Link>
      <nav className="flex flex-wrap items-start pt-0 p-3 space-x-3">
        <Link className="rounded-md mt-2 py-2 px-4 hover:bg-red-600 bg-red-500" to="/blog">Blog</Link>
        <Link className="rounded-md mt-2 py-2 px-4 hover:bg-red-600 bg-red-500" to="/dossier">Dossier</Link>
        <Link className="rounded-md mt-2 py-2 px-4 hover:bg-red-600 bg-red-500" to="/calendario">Calendario</Link>
        <Link className="rounded-md mt-2 py-2 px-4 hover:bg-red-600 bg-red-500" to="/contacto">Contacto</Link>
      </nav>
    </header>
  )
}