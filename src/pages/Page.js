import React from 'react'
import { useMarkdownPage } from 'react-static-plugin-md'

export default function Dossier({ children }) {
  const { frontmatter } = useMarkdownPage()
  return (
    <article className="mx-auto px-4 max-w-3xl">
      <h1 className="pt-8 font-medium text-center text-gray-700 text-6xl mb-4">{frontmatter.title}</h1>
      {frontmatter.image && (
        <figure className="my-4">
          <img className="object-cover w-full" src={`${frontmatter.image}?nf_resize=fit&w=1024`} alt="imagen de portada" />
          {frontmatter.image_caption && (
            <figcaption className="text-gray-500 text-center text-xs mt-2">{frontmatter.image_caption}</figcaption>
          )}
        </figure>
      )}
      <div className="prose prose-red lg:prose-xl dark:prose-dark mx-auto py-8">
        {children}
      </div>
    </article>
  )
}