import React from 'react'
import siteData from './data/site.json'
import dossierConfig from './data/dossier.json'
import { getFiles } from './lib/contentUtils'

const config = {
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData },
  }) => (
    <Html lang="es">
      <Head>
        <title>{siteData.titulo}</title>
        <meta name="description" content={siteData.subtitulo} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' type='image/png' href='/images/escudo-fullcolor.png'/>
        <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Alegreya+Sans&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/animate.css@4.1.1/animate.css" rel="stylesheet" />
        {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> */}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData() {
    return {
      ...siteData,
      lastBuilt: Date.now()
    }
  },
  getRoutes: async () => {
    const homePage = await getFiles('content/index.md')
    const blogPages = (await getFiles('content/blog/*.md')).map(p => ({ ...p, link: `/blog/${p.slug}` }))
    const dossierPages = (await getFiles('content/dossier/*.md')).map(p => ({ ...p, link: `/dossier/${p.slug}` }))
    const contactPage = await getFiles('content/contacto.md')

    return [
      {
        path: '404',
        template: 'src/pages/404'
      },
      {
        path: '/',
        template: 'src/pages/Landing',
        getData: () => ({ page: homePage[0], dossierConfig })
      },
      ...blogPages.map(page => ({
        path: page.link,
        template: 'src/pages/Blog',
        getData: () => ({ page })
      })),
      ...dossierPages.map(page => ({
        path: page.link,
        template: 'src/pages/Dossier',
        getData: () => ({ page, dossierConfig })
      })),
      {
        path: '/contacto',
        template: 'src/pages/Contact',
        getData: () => ({ page: contactPage[0] })
      }
    ]
  },
  siteRoot: 'https://asoguardianes.com',
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap'
  ]
}

export default config
