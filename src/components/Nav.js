import React, { createContext, useRef } from 'react'
import { Link } from '@reach/router'
import { useSiteData } from 'react-static'
import Social from 'components/Social'
import NavLink from 'components/NavLink'
import useIsMobile from 'utils/useIsMobile'

export const MenuContext = createContext()

export default function Nav() {
  const menuRef = useRef()
  const { site, dossierConfig } = useSiteData()
  const isMobile = useIsMobile()

  return (
    <MenuContext.Provider value={menuRef}>
      <aside className="md:max-w-xs w-full">
        <div className="sticky top-0 md:h-screen flex flex-col bg-gradient-to-t from-red-600 to-red-900">
          <NavLink to='/' className="p-2 text-white">
            <img className="w-24 mx-auto my-4" src="/images/escudo-fullcolor.png" alt="Escudo guardianes" />
            <div className="text-center">
              <h1 className="text-2xl">{site.title}</h1>
              <p>{site.description}</p>
            </div>
          </NavLink>
          <details ref={menuRef} className="text-white" open={!isMobile}>
            <summary className="md:hidden p-4 cursor-pointer text-center text-base">Menú</summary>
            <nav>
              <ul className="md:max-h-nav px-4 py-6 space-y-6 overflow-y-auto">
                <li>
                  <details open>
                    <summary className="-ml-2 text-xl cursor-pointer">Dossier</summary>
                    <ul className="pt-1">
                      {dossierConfig.map(d => (
                        <li className="" key={d.link}>
                          <NavLink to={d.link} className="flex justify-start items-center text-red-00">
                            <img className="m-3 h-auto w-12 bg-red-500 hover:bg-red-600 rounded-xl p-2" src={d.icon} alt={`icono de ${d.title}`} />
                            <p className="text-xl tracking-wider">{d.title}</p>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                {/* <li>
                  <NavLink to="/blog" className="flex justify-start items-center">
                    <p className="ml-4 text-xl tracking-wider">Blog</p>
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/calendar" className="flex justify-start items-center">
                    <p className="ml-4 text-xl tracking-wider">Calendario</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="flex justify-start items-center">
                    <p className="ml-4 text-xl tracking-wider">Contacto</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="flex justify-start items-center">
                    <p className="ml-4 text-xl tracking-wider">Sobre nosotros</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </details>
          <div className="flex-grow"></div>
          <footer className="m-4 space-y-2 text-white text-base">
            <Social />
            <p>© Asociación Guardianes {new Date().getFullYear()}</p>
            <div className="opacity-75 flex space-x-3">
              <Link className="block" to="/rgpd">RGPD</Link>
              <Link className="block" to="/privacy">Privacidad</Link>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/juandjara/guardianes" className="block">
                Código fuente en Github
              </a>
            </div>
          </footer>
        </div>
      </aside>
    </MenuContext.Provider>
  )
}
