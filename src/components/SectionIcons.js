import React from 'react'
import { Link } from '@reach/router'

const SectionIcons = ({ items, className = '' }) => (
  <ul className={`py-4 grid grid-cols-auto-fit-100 gap-x-6 gap-y-12 place-content-center animate__bounceInUp animate__animated ${className}`}>
    {items.map(item => (
      <li className="text-center uppercase tracking-wider" key={item.link}>
        <Link to={item.link}>
          <img src={item.icon} alt={`icono de ${item.title}`} className="mx-auto h-auto w-20 bg-red-500 hover:bg-red-600 rounded-xl p-4" />
          <p className="mt-2">{item.title}</p>
        </Link>
      </li>
    ))}
  </ul>
)

export default SectionIcons
