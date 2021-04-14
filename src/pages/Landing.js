import React from 'react'
import { useRouteData, useSiteData } from 'react-static'
import styled from 'styled-components'
import SectionIcons from '../components/SectionIcons'

const LandingStyle = styled.div`
  .red {
    min-height: 540px;
    background-image: url('/images/banner.jpg');
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .brand {
        padding: 8px;

        img {
          max-width: 70px;
          margin-right: 8px;
        }

        h1 {
          margin: 0;
          margin-top: 8px;
        }

        p {
          margin: 0;
        }
      }

      .brand, nav {
        display: flex;
        align-items: flex-start;
      }

      nav {
        padding: 8px;
        a {
          border-radius: 8px;
          padding: 8px 16px;
          margin: 0px 8px;
          background-color: firebrick;
          font-size: 18px;
        }
      }
    }
  }
`

export default function Landing() {
  const { collectionsInfo } = useRouteData()
  
  return (
    <LandingStyle>
      <section className="red">
        <header>
          <div className="brand">
            <img src="/images/escudo-fullcolor.png" alt="Escudo guardianes" />
            <div>
              <h1>Asociación Guardianes</h1>
              <p>Eventos culturales de ocio alternativo</p>
            </div>
          </div>
          <nav>
            <a href="/blog">Blog</a>
            <a href="/dossier">Dossier</a>
            <a href="/calendario">Calendario</a>
            <a href="/contacto">Contacto</a>
          </nav>
        </header>
        <SectionIcons items={collectionsInfo} />
      </section>
    </LandingStyle>
  )
}