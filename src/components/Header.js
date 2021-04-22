import React from 'react'
import { useSiteData } from 'react-static'
import { Link } from '@reach/router'
import Social from './Social'

export default function Header ({ className = '', ...props }) {
  const { site } = useSiteData()
  return (
    <header className={`text-white md:mb-6 flex flex-wrap justify-between items-center ${className}`} {...props}>
      <Link to='/' className="flex items-center p-2">
        <img className="md:-mt-1 md:-mb-8 mx-2 w-20 md:w-24" src="/images/escudo-fullcolor.png" alt="Escudo guardianes" />
        <div className="ml-2">
          <h1 className="text-2xl">{site.title}</h1>
          <p>{site.description}</p>
        </div>
      </Link>
      <Social className="mx-4" />
    </header>
  )
}