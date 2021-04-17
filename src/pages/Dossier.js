import React from 'react'
import Header from "components/Header";
import GFM from 'remark-gfm'
import Markdown from 'react-markdown'
import { useRouteData } from 'react-static'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'head head head'
    'nav main nav2'
    'foot foot foot';

  .header-area { grid-area: head; }
  .foot-area { grid-area: foot; }
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
  return (
    <Grid>
      <Header className="header-area bg-red-700" />
      <aside className="hidden md:block nav-area"></aside>
      <main className="main-area px-4">
        <h1 className="pt-8 font-semibold text-center text-4xl mb-4">{page.data.title}</h1>
        <div className="prose prose-red lg:prose-xl mx-auto py-8">
          <Markdown remarkPlugins={[GFM]}>{page.content}</Markdown>
        </div>
      </main>
      <aside className="hidden md:block nav2-area"></aside>
      <footer className="footer-area"></footer>
    </Grid>
  )
}