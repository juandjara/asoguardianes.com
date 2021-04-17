import React from 'react'
import Social from './Social'

export default function Footer({ className = '', ...props }) {
  return (
    <footer className={`bg-gray-600 flex items-center justify-between px-4 text-white ${className}`} {...props}>
      <p>Asociacion Guardianes © 2021</p>
      <Social />
    </footer>
  )
}