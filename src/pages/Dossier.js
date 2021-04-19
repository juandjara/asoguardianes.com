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

  @media (min-width: 720px) {
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
  const matches = useMediaQuery('(min-width: 720px)')
  return (
    <Grid className="min-h-screen">
      <Header className="header-area bg-red-700" />
      <aside className="nav-area">
        <details className="sticky top-0" open={matches}>
          <summary className="md:hidden px-5 cursor-pointer pt-4 text-base text-red-700">Secciones</summary>
          <ul className="py-2">
            {dossierConfig.map(d => (
              <li key={d.link}>
                <Link to={d.link} className="flex justify-start items-center text-red-500">
                  <img className="my-3 mx-4 h-auto w-16 bg-red-500 hover:bg-red-600 rounded-xl p-2" src={d.icon} alt={`icono de ${d.title}`} />
                  <p className="text-lg uppercase tracking-wider">{d.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </aside>
      <article className="main-area px-4 max-w-screen-lg">
        <h1 className="pt-8 font-medium text-center text-gray-700 text-6xl mb-4">{page.data.title}</h1>
        {page.data.bg_image && (
          <figure className="my-4">
            <img className="object-cover w-full" src={`${page.data.bg_image}?nf_resize=fit&w=1024`} alt="imagen de portada" />
            {page.data.bg_caption && (
              <figcaption className="text-gray-500 text-center text-xs mt-2">{page.data.bg_caption}</figcaption>
            )}
          </figure>
        )}
        <div className="prose prose-red lg:prose-xl mx-auto py-8">
          <Markdown remarkPlugins={[GFM]}>{page.content}</Markdown>
        </div>
      </article>
      <aside className="hidden md:block nav2-area"></aside>
      <Footer className="foot-area" />
    </Grid>
  )
}