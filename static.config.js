import React from 'react'
import axios from 'axios'
import api from './cmsapi'

const igTokenUrl = 'https://guardianes-instagram-tokenizer.herokuapp.com/token.json'

async function getInstagramPhotos () {
  const { token } = await axios.get(igTokenUrl).then(res => res.data)
  const fields = ['id', 'caption', 'media_type', 'media_url', 'timestamp']
  const url = `https://graph.instagram.com/me/media?fields=${fields.join(',')}&access_token=${token}`
  return axios.get(url).then(res => res.data)
}

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
        <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: async () => {
    const homeData = await api.getSiteData()
    return {
      ...homeData,
      lastBuilt: Date.now()
    }
  },
  getRoutes: async () => {
    const photos = await getInstagramPhotos()
    const collectionsInfo = await api.getCollectionsInfo()
    for (const collection of collectionsInfo) {
      const items = await api.getCollectionItems(collection.coleccion)
      collection.items = items
    }

    return [
      {
        path: '404',
        template: 'src/pages/404'
      },
      {
        path: '/',
        template: 'src/pages/Home',
        getData: () => ({ photos, collectionsInfo })
      },
      ...collectionsInfo.map(collection => ({
        path: `/${collection.coleccion}`,
        template: 'src/pages/Collection',
        getData: () => ({ collection, collectionsInfo })
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
