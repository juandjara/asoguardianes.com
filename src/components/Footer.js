import React from 'react'
import Social from './Social'

export default function Footer({ className = '', ...props }) {
  return (
    <footer className={`bg-gray-600 flex flex-wrap items-center justify-between px-4 text-white ${className}`} {...props}>
      <p className="p-1">Asociacion Guardianes © 2021</p>
      <Social />
    </footer>
  )
}