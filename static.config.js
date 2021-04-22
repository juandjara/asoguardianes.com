import React from 'react'
import site from './data/site.json'
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
        <title>{siteData.site.title}</title>
        <meta name="description" content={siteData.site.description} />
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
      site,
      dossierConfig,
      lastBuilt: Date.now()
    }
  },
  getRoutes: async () => {
    const blog = (await getFiles('content/blog/*.md')).map(p => ({ ...p, link: `/blog/${p.slug}` }))
    const dossier = (await getFiles('content/dossier/*.md')).map(p => ({ ...p, link: `/dossier/${p.slug}` }))
    const home = (await getFiles('content/index.md'))[0]
    const contact = (await getFiles('content/contact.md'))[0]
    const about = (await getFiles('content/about.md'))[0]

    return [
      {
        path: '404',
        template: 'src/pages/404'
      },
      {
        path: '/',
        template: 'src/components/Page',
        getData: () => ({ page: home })
      },
      {
        path: '/contacto',
        template: 'src/components/Page',
        getData: () => ({ page: contact })
      },
      {
        path: '/sobre-nosotros',
        template: 'src/components/Page',
        getData: () => ({ page: about })
      },
      ...blog.map(page => ({
        path: page.link,
        template: 'src/pages/Blog',
        getData: () => ({ page })
      })),
      ...dossier.map(page => ({
        path: page.link,
        template: 'src/components/Page',
        getData: () => ({ page })
      }))
    ]
  },
  siteRoot: 'https://asoguardianes.com',
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
    ['react-static-plugin-file-watch-reload', { paths: ['content/**/*.md', 'data/*.json'] }]
  ]
}

export default config
