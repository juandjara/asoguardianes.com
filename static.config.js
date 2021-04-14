import React from 'react'
import dataService from './dataService'

export default {
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
  getSiteData: async () => {
    const homeData = await dataService.getSiteData()
    return {
      ...homeData,
      lastBuilt: Date.now()
    }
  },
  getRoutes: async () => {
    const collectionsInfo = await dataService.getCollectionsInfo()
    const collectionItems = await dataService.getCollectionItems()
    for (const collection of collectionsInfo) {
      collection.items = collectionItems.filter(d => d.group === collection.id)
    }

    const tags = new Set(collectionItems.map(c => c.tags || []).flat())

    return [
      {
        path: '404',
        template: 'src/pages/404'
      },
      {
        path: '/',
        template: 'src/pages/Landing',
        getData: () => ({ collectionsInfo })
      },
      ...collectionsInfo.map(collection => ({
        path: dataService.collectionToLink(collection),
        template: 'src/pages/Collection',
        getData: () => ({ collection, collectionsInfo })
      })),
      ...Array.from(tags).map(tag => ({
        path: dataService.tagToLink(tag),
        template: 'src/pages/Collection',
        getData: () => {
          const collection = {
            title: tag,
            description: `<p>Actividades que contienen la etiqueta <strong class="tag">${tag}</strong></p>`,
            icon: '/images/hashtag.svg',
            iconRaw: true,
            items: collectionItems.filter(d => {
              const key = dataService.tagToLink(tag)
              const tags = d.tags || []
              return tags.some(tag => dataService.tagToLink(tag) === key)
            })
          }
          return { collection, collectionsInfo }
        }
      }))
    ]
  },
  siteRoot: 'https://asoguardianes.com',
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap'
  ]
}
