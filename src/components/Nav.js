import React, { createContext, useRef } from 'react'
import { Link } from '@reach/router'
import { useSiteData } from 'react-static'
import Social from 'components/Social'
import NavLink from 'components/NavLink'

export const MenuContext = createContext()

export default function Nav() {
  const menuRef = useRef()
  const { site, dossierConfig } = useSiteData()

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
          <details ref={menuRef} className="text-white" open>
            <summary className="md:hidden p-4 cursor-pointer text-center text-base">Menú</summary>
            <nav>
              <ul className="md:max-h-nav px-4 py-6 space-y-6 overflow-y-auto">
                <li>
                  <NavLink to="/blog" className="flex justify-start items-center">
                    <p className="ml-4 text-xl tracking-wider">Blog</p>
                  </NavLink>
                  {/* <details open>
                    <summary className="-ml-2 text-xl cursor-pointer">Blog</summary>
                    <ul className="text-lg py-4 px-4">
                      <li className="pt-2">
                        <p>2021</p>
                        <ul className="pt-2 p-4 list-disc">
                          <li>Quedada de talleres</li>
                          <li>Rol Online: Los Portales del Rey Goblin</li>
                          <li>Dia de juegos de mesa: Arcadia Quest</li>
                          <li>... 14 más</li>
                        </ul>
                      </li>
                      <li className="pt-2">
                        <p>2020</p>
                        <ul className="pt-2 p-4 list-disc">
                          <li>Fiesta de navidad 2020</li>
                          <li>Evento de noviembre en un pueblo perdido</li>
                          <li>... 3 más</li>
                        </ul>
                      </li>
                    </ul>
                  </details> */}
                </li>
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
                <li>
                  <NavLink to="/calendario" className="flex justify-start items-center">
                    <p className="ml-4 text-xl tracking-wider">Calendario</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contacto" className="flex justify-start items-center">
                    <p className="ml-4 text-xl tracking-wider">Contacto</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sobre-nosotros" className="flex justify-start items-center">
                    <p className="ml-4 text-xl tracking-wider">Sobre nosotros</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </details>
          <div className="flex-grow"></div>
          <footer className="m-4 space-y-2 text-white text-base">
            <div className="opacity-75">
              <Link className="block" to="">RGPD</Link>
              <Link className="block" to="">Privacidad</Link>
              <p>© Asociación Guardianes {new Date().getFullYear()}</p>
            </div>
            <Social />
          </footer>
        </div>
      </aside>
    </MenuContext.Provider>
  )
}
