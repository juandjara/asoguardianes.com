import React from 'react'
import site from './data/site.json'
import dossierConfig from './data/dossier.json'

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
        <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans&display=swap" rel="stylesheet" />
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
    return [
      {
        path: '404',
        template: 'src/pages/404'
      },
      {
        path: '/blog',
        template: 'src/pages/Blog',
      },
      {
        path: '/calendar',
        template: 'src/pages/Calendar'
      }
    ]
  },
  siteRoot: 'https://asoguardianes.com',
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
    ['react-static-plugin-file-watch-reload', { paths: ['content/**/*.md', 'data/*.json'] }],
    ['react-static-plugin-md', {
      location: './content',
      pathPrefix: '',
      template: 'src/pages/Page.js',
      remarkPlugins: [require('remark-gfm')]
    }]
  ]
}

export default config
