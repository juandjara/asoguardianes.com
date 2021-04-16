import React from 'react'
import Header from "components/Header";
import GFM from 'remark-gfm'
import Markdown from 'react-markdown'
import { useRouteData } from 'react-static'

export default function Dossier() {
  const { page, dossierPages } = useRouteData()  
  return (
    <div className="grid grid-cols-3 auto-cols-min auto-rows-min">
      <Header className="col-span-3 bg-red-700" />
      <aside></aside>
      <main>
        <h1 className="pt-8 font-semibold text-center text-4xl mb-4">{page.data.title}</h1>
        <div className="prose prose-red lg:prose-xl mx-auto py-8">
          <Markdown remarkPlugins={[GFM]}>{page.content}</Markdown>
        </div>
      </main>
      <aside></aside>
      <footer className="col-span-3"></footer>
    </div>
  )
}