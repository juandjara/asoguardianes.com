import React, { useRef } from 'react'
import useIsMobile from 'utils/useIsMobile'

const sizeMap = ['text-xl', 'text-base', 'text-base', 'text-sm']
const mtMap = ['mt-6', 'mt-4', 'mt-3', 'mt-2']
const colorMap = ['text-gray-700', 'text-gray-600', 'text-gray-600', 'text-gray-500']

function getStyleForHeading(n) {
  const size = sizeMap[n]
  const mt = mtMap[n]
  const ml = n ? `ml-${n * 4}` : ''
  const color = colorMap[n]
  return [size, mt, ml, color].join(' ')
}

const asidePosition = 'fixed top-auto bottom-0 right-0'
const asideGteMd = 'md:sticky md:top-4 md:bottom-auto md:right-auto md:mt-28 md:max-w-xs'

export default function Page({ headings, frontmatter, children }) {
  const minHeading = Math.min(...headings.map(h => h.depth))
  const detailsRef = useRef()
  const isMobile = useIsMobile()

  function handleClick () {
    console.log('onClick')
    if (detailsRef.current && isMobile) {
      detailsRef.current.open = false
    }
  }

  return (
    <main className="md:flex items-start justify-center">
      <article className="md:flex-auto px-4 max-w-3xl">
        <h1 id="_top" className="pt-8 font-medium text-center text-gray-700 text-6xl mb-4">{frontmatter.title}</h1>
        {frontmatter.image && (
          <figure className="my-4">
            <img className="object-cover w-full" src={`${frontmatter.image}?nf_resize=fit&w=1024`} alt="imagen de portada" />
            {frontmatter.image_caption && (
              <figcaption className="text-gray-500 text-center text-xs mt-2">{frontmatter.image_caption}</figcaption>
            )}
          </figure>
        )}
        <div className="prose prose-red lg:prose-xl dark:prose-dark mx-auto py-6 mb-8">
          {children}
        </div>
      </article>
      {(!!headings.length && !frontmatter.hideaside) && (
        <aside className={`${asideGteMd} ${asidePosition} overflow-y-auto max-h-screen w-full flex-shrink-0 ml-4 bg-red-50 rounded-lg`}>
          <details ref={detailsRef} open={!isMobile}>
            <summary className="p-3">En esta página</summary>
            <ul className="pb-8 px-6">
              <li className="font-medium text-2xl mt-4 text-gray-700">
                <a onClick={handleClick} href="#_top">{frontmatter.title}</a>
              </li>
              {headings.map(h => (
                <li key={h.slug} className={getStyleForHeading(h.depth - minHeading)}>
                  <a onClick={handleClick} href={`#${h.slug}`}>{h.value}</a>
                </li>
              ))}
            </ul>
          </details>
        </aside>
      )}
    </main>
  )
}
