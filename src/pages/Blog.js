import { Link } from '@reach/router'
import React from 'react'
import pages from '../../artifacts/pages.json'

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString({ format: 'medium' })
}

export default function Blog() {
  const blogPages = pages.children.find(p => p.key === 'blog')?.children || []
  console.log(blogPages)
  return (
    <div className="max-w-4xl mx-auto px-2 mb-2">
      <h1 className="font-medium text-center text-gray-700 text-4xl py-6 mt-6 mb-2">Blog</h1>
      <ul className="space-y-6">
        {blogPages.map(p => (
          <li key={p.path}>
            <p className="text-red-700 mb-2">{formatDate(p.frontmatter.publish_date)}</p>
            <Link className="text-xl" to={'/' + p.path}>{p.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}