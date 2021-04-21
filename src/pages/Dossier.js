import React from 'react'
import GFM from 'remark-gfm'
import Markdown from 'react-markdown'
import { useRouteData } from 'react-static'

export default function Dossier() {
  const { page } = useRouteData()
  return (
    <article className="mx-auto px-4 max-w-3xl">
      <h1 className="pt-8 font-medium text-center text-gray-700 text-6xl mb-4">{page.data.title}</h1>
      {page.data.image && (
        <figure className="my-4">
          <img className="object-cover w-full" src={`${page.data.image}?nf_resize=fit&w=1024`} alt="imagen de portada" />
          {page.data.image_caption && (
            <figcaption className="text-gray-500 text-center text-xs mt-2">{page.data.image_caption}</figcaption>
          )}
        </figure>
      )}
      <div className="prose prose-red lg:prose-xl dark:prose-dark mx-auto py-8">
        <Markdown remarkPlugins={[GFM]}>{page.content}</Markdown>
      </div>
    </article>
  )
}