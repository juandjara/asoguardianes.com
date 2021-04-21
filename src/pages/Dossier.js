import React from 'react'
import Header from "components/Header"
import GFM from 'remark-gfm'
import Markdown from 'react-markdown'
import { useRouteData } from 'react-static'
import styled from 'styled-components'
import { Link } from '@reach/router'
import useMediaQuery from 'utils/useMediaQuery'
import Footer from 'components/Footer'

const Grid = styled.div`
  .header-area {
    grid-area: head;
  }
  .foot-area {
    grid-area: foot;
  }
  .nav-area {
    grid-area: nav;
  }
  .nav2-area {
    grid-area: nav2;
  }
  .main-area {
    grid-area: main;
  }

  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: auto auto auto 1fr auto;
  grid-template-areas: 
    'head'
    'nav'
    'nav2'
    'main'
    'foot';

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      'head head'
      'nav main'
      'nav2 main'
      'foot foot';
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'head head head'
      'nav main nav2'
      'foot foot foot';
  }
`

export default function Dossier() {
  const { page, dossierConfig } = useRouteData()
  const matches = useMediaQuery('(min-width: 768px)')
  return (
    <Grid className="min-h-screen dark:bg-red-900">
      <Header className="z-10 header-area bg-gradient-to-r from-red-600 to-red-900" />
      <aside className="nav-area bg-red-50 pt-6 -mt-6">
        <details className="sticky top-0 max-h-screen overflow-y-auto" open={matches}>
          <summary className="md:hidden p-4 border-b border-red-700 cursor-pointer text-base text-red-700">Secciones</summary>
          <ul className="px-4 py-6 space-y-6 text-red-600">
            <li>
              <Link to="/">
                <p className="ml-4 text-xl tracking-wider">Inicio</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex justify-start items-center">
                <p className="ml-4 text-xl tracking-wider">Blog</p>
              </Link>
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
                      <Link to={d.link} className="flex justify-start items-center text-red-00">
                        <img className="m-3 h-auto w-12 bg-red-500 hover:bg-red-600 rounded-xl p-2" src={d.icon} alt={`icono de ${d.title}`} />
                        <p className="text-xl tracking-wider">{d.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <Link to="/" className="flex justify-start items-center">
                {/* <div className="my-3 mx-4 h-auto w-16 bg-red-500 hover:bg-red-600 rounded-xl p-2" /> */}
                <p className="ml-4 text-xl tracking-wider">Calendario</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex justify-start items-center">
                {/* <div className="my-3 mx-4 h-auto w-16 bg-red-500 hover:bg-red-600 rounded-xl p-2" /> */}
                <p className="ml-4 text-xl tracking-wider">Contacto</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex justify-start items-center">
                {/* <div className="my-3 mx-4 h-auto w-16 bg-red-500 hover:bg-red-600 rounded-xl p-2" /> */}
                <p className="ml-4 text-xl tracking-wider">Sobre nosotros</p>
              </Link>
            </li>
          </ul>
        </details>
      </aside>
      <article className="main-area px-4 max-w-screen-lg">
        <h1 className="pt-8 font-medium text-center text-gray-700 text-6xl mb-4">{page.data.title}</h1>
        {page.data.image && (
          <figure className="my-4">
            <img className="object-cover w-full" src={`${page.data.image}?nf_resize=fit&w=1024`} alt="imagen de portada" />
            {page.data.image_caption && (
              <figcaption className="text-gray-500 text-center text-xs mt-2">{page.data.image_caption}</figcaption>
            )}
          </figure>
        )}
        <div className="prose prose-red lg:prose-xl dark:prose-dark mx-auto py-8">
          <Markdown remarkPlugins={[GFM]}>{page.content}</Markdown>
        </div>
      </article>
      <aside className="hidden md:block nav2-area"></aside>
      <Footer className="foot-area" />
    </Grid>
  )
}