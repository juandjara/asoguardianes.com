import React from 'react'
import Header from "components/Header"
import GFM from 'remark-gfm'
import Markdown from 'react-markdown'
import { useRouteData } from 'react-static'
import styled from 'styled-components'
import { Link } from '@reach/router'
import useMediaQuery from 'utils/useMediaQuery'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas:
    'head head head'
    'nav main nav2'
    'foot foot foot';

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
    grid-column: span 3 / span 3;
    @media (min-width: 768px) {
      grid-area: main;
    }
  }
`

export default function Dossier() {
  const { page, dossierPages } = useRouteData()
  const matches = useMediaQuery('(min-width: 720px)')
  return (
    <Grid>
      <Header className="header-area bg-red-700" />
      <aside className="nav-area">
        <details open={matches}>
          <summary className="px-5 cursor-pointer pt-4 text-base text-red-700">Secciones</summary>
          <ul className="py-2">
            {dossierPages.map(d => (
              <li key={d.slug}>
                <Link to={`/dossier/${d.slug}`} className="flex justify-start items-center text-red-500">
                  <img className="my-3 mx-4 h-auto w-16 bg-red-500 hover:bg-red-600 rounded-xl p-2" src={d.data.icon} alt={`icono de ${d.data.title}`} />
                  <p className="text-lg uppercase tracking-wider">{d.data.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </aside>
      <main className="main-area px-4">
        <h1 className="pt-8 font-medium text-center text-gray-700 text-6xl mb-4">{page.data.title}</h1>
        {page.data.bg_image && (
          <figure className="my-4">
            <img className="object-cover w-full" src={page.data.bg_image} alt="imagen de portada" />
            {page.data.bg_caption && (
              <figcaption className="text-gray-500 text-center text-xs mt-2">{page.data.bg_caption}</figcaption>
            )}
          </figure>
        )}
        <div className="prose prose-red lg:prose-xl py-8">
          <Markdown remarkPlugins={[GFM]}>{page.content}</Markdown>
        </div>
      </main>
      <aside className="hidden md:block nav2-area"></aside>
      <footer className="footer-area"></footer>
    </Grid>
  )
}