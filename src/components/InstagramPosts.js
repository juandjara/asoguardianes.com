import React from 'react'

const USER_ID = '4220198118'
const bullshit = '&edm=ALY_pVYBAAAA&ccb=7-4&oh=321b448b9cb88a0b87a60685abff6b47&oe=60A53DE4&_nc_sid=1ffb93'

export default function InstagramPosts({ posts = [] }) {
  return (
    <div className="grid max-w-screen-lg grid-flow-col auto-cols-max overflow-x-auto mx-auto gap-3">
      {posts.map(({ id, caption, src, width, height, url }) => (
        <a key={id} href={url} className="rounded-xl">
          <img src={src} alt={caption} width={width} height={height} />
        </a>
      ))}
    </div>
  )
}