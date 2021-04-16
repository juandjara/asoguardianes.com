import React from 'react'
import { useRouteData } from 'react-static'
import SectionIcons from '../components/SectionIcons'
import Markdown from 'react-markdown'
import BackgroundImage from 'components/BackgroundImage'
import Header from 'components/Header'
import GFM from 'remark-gfm'

export default function Landing() {
  const { page, dossierPages } = useRouteData()  
  return (
    <div className="overflow-hidden">
      <BackgroundImage
        as='section'
        src='/images/banner.jpg'
        className='text-white flex flex-col justify-between'
        style={{ minHeight: 480 }}>
        <Header />
        <SectionIcons items={dossierPages} />
      </BackgroundImage>
      <div className="prose prose-red lg:prose-xl mx-auto py-8">
        <Markdown remarkPlugins={[GFM]}>{page.content}</Markdown>
      </div>
      <footer></footer>
    </div>
  )
}