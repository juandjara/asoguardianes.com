import React from 'react'
import { useRouteData } from 'react-static'
import SectionIcons from '../components/SectionIcons'
import Markdown from 'react-markdown'
import BackgroundImage from 'components/BackgroundImage'
import Header from 'components/Header'
import Footer from 'components/Footer'
import GFM from 'remark-gfm'
import InstagramPosts from 'components/InstagramPosts'

export default function Landing() {
  const { page, dossierConfig, instagramPosts } = useRouteData()
  return (
    <div className="overflow-hidden min-h-screen flex flex-col">
      <BackgroundImage
        as='section'
        src='/images/banner.jpg'
        className='text-white flex flex-col justify-between'
        style={{ minHeight: 480 }}>
        <Header />
        <SectionIcons items={dossierConfig} />
      </BackgroundImage>
      <InstagramPosts posts={instagramPosts} />
      <div className="prose prose-red lg:prose-xl mx-auto py-8 px-4 flex-grow">
        <Markdown remarkPlugins={[GFM]}>{page.content}</Markdown>
      </div>
      <Footer />
    </div>
  )
}