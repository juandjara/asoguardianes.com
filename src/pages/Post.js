import React, { useEffect } from 'react'
import api from '../../cmsapi'
import { Link } from '@reach/router'
import { useRouteData } from 'react-static'
import styled from 'styled-components'

const CONTAINER_WIDTH = 812;

function groupPosts (posts) {
  const reduced = posts.reduce((acum, elem) => {
    acum[elem.seccion] = acum[elem.seccion] || { seccion: elem.seccion, posts: [] }
    acum[elem.seccion].posts = acum[elem.seccion].posts.concat(elem)
    return acum
  }, {})
  return Object.values(reduced)
}

const PostHeaderStyles = styled.header`
  header {
    color: white;
    background: linear-gradient(120deg, #8b1f27, #c41525);
    padding-bottom: 32px;
  }

  nav {
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  nav a {
    text-decoration: none;
    color: white;
  }

  nav a.nav-root {
    align-items: center;
    margin-bottom: 24px;
    display: flex;
  }

  nav ul {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
  }

  nav ul a {
    display: block;
  }

  @media (max-width: ${CONTAINER_WIDTH}px) {
    nav ul {
      justify-content: center;
    }
  }

  nav ul li {
    padding-bottom: 8px;
    border-bottom: 3px solid transparent;
    margin: 0 8px;
    text-align: center;
  }

  nav ul li p {
    margin: 0;
  }

  nav ul img {
    height: 45px;
  }

  nav ul li:hover,
  nav ul li.selected {
    border-bottom-color: white;
  }

  .nav-root h1 {
    font-size: 2rem;
    margin: 0;
  }

  .site-logo {
    height: 60px;
    margin-right: 1rem;
  }

  .container {
    max-width: ${CONTAINER_WIDTH}px;
    padding: 0 16px;
    margin: 0 auto;
  }

  .section-description h1 {
    font-size: 4rem;
    margin: 16px 0;
  }

  .section-description .item-html {
    font-size: 20px;
  }
`

function PostsHeader ({ sections, currentSection }) {
  return (
    <PostHeaderStyles className="post-header">
      <nav>
        <Link className="nav-root" to="/">
          <img className="site-logo" src="/images/escudo-flat-blanco.png" alt="logo" />
          <h1 className="title">Asociación Guardianes</h1>
        </Link>
        <ul>
          {sections.map(s => (
            <li key={s.id} className={s.id === currentSection.id ? 'selected' : ''}>
              <Link to={`/${s.id}`}>
                <img src={s.icono && api.makeImageUrl(s.icono, 'thumbnail')} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="container section-description">
        <h1>{currentSection.titulo}</h1>
        <div className="item-html" dangerouslySetInnerHTML={{ __html: currentSection.descripcion }}></div>
      </section>
    </PostHeaderStyles>
  )
}

const FixedMenuStyles = styled.section`
  .fixed-menu {
    position: absolute;
    top: 24px;
    left: 100%;
    width: 100%;
    max-width: 240px;
    padding: 0 16px;
  }
  @media (max-width: 1140px) {
    .fixed-menu {
      display: none;
    }
  }
  .fixed-menu h2 {
    margin-bottom: 12px;
    margin-top: 2rem;
  }
  .fixed-menu li {
    margin-bottom: 8px;
  }
  .fixed-menu a {
    text-decoration: none;
    color: inherit;
  }
  .fixed-menu a:hover {
    text-decoration: underline;
  }
`

function FixedMenu ({ groupedPosts }) {
  return (
    <FixedMenuStyles className="fixed-menu">
      {groupedPosts.map(g => (
        <ul key={g.seccion}>
          <h2>{g.seccion}</h2>
          {g.posts.map(p => (
            <li key={p.id}>
              <a href={`#${p.id}`}>{p.titulo}</a>
            </li>
          ))}
        </ul>
      ))}
    </FixedMenuStyles>
  )
}

const PostStyles = styled.div`
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
  }

  .container {
    max-width: ${CONTAINER_WIDTH}px;
    padding: 0 16px;
    margin: 0 auto;
  }

  @media (min-width: ${CONTAINER_WIDTH}px) {
    .card {
      box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.2);
      border-radius: 8px;
      background-color: white;
    }

    .posts {
      margin-top: -24px;
    }
  }

  .posts {
    flex-grow: 1;
    position: relative;
  }

  .posts h2 {
    font-size: 30px;
  }

  .post {
    min-width: 320px;
    margin-bottom: 32px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .post h3 {
    font-size: 20px;
    margin-top: 0;
  }

  .post .item-html {
    line-height: 1.6;
  }

  .post img {
    flex: 0 0 auto;
    margin-left: 8;
    border-radius: 4;
    display: block;
  }

  @media (max-width: ${CONTAINER_WIDTH}px) {
    .post {
      flex-direction: column-reverse;
    }
    .post img {
      margin: 8px auto;
    }
  }

  .tags span {
    background-color: #eee;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .tags span + span {
    margin-left: 8px;
  }

  .icons {
    font-size: 14px;
  }

  .icons > span {
    margin-right: 12px;
  }

  .icons .material-icons {
    vertical-align: bottom;
    display: inline-block;
    margin-right: 4px;
  }
`

function Posts () {
  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])
  const { section, sectionsInfo } = useRouteData()
  const groupedPosts = groupPosts(section.items)
  return (
    <PostStyles className="page">
      <PostsHeader sections={sectionsInfo} currentSection={section} />
      <div className={section.items.length ? 'posts container card' : 'posts container'}>
        {groupedPosts.map(g => (
          <ul key={g.seccion}>
            <h2>{g.seccion}</h2>
            {g.posts.map(p => (
              <li className="post" id={p.id} key={p.id}>
                <div>
                  <h3>{p.titulo}</h3>
                  <p className="tags">{p.etiquetas.map(tag => (<span key={tag}>{tag}</span>))}</p>
                  <div className="item-html" dangerouslySetInnerHTML={{ __html: p.descripcion }}></div>
                  <p className="icons">
                    {(p.informacion || []).map(i => (
                      <span key={i.icono}>
                        <i className="material-icons">{i.icono}</i>
                        <span>{i.texto}</span>
                      </span>
                    ))}
                  </p>
                </div>
                <img src={p.imagen && api.makeImageUrl(p.imagen, 'thumbnail')} />
              </li>
            ))}
          </ul>
        ))}
        <FixedMenu groupedPosts={groupedPosts} />
      </div>
    </PostStyles>
  )
}

export default Posts
