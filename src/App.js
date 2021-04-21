import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Loading from './components/Loading'
import GlobalStyle from './components/GlobalStyle'
import Nav from 'components/Nav'

function App() {
  return (
    <Root>
      <GlobalStyle />
      <div className="content">
        <React.Suspense fallback={<Loading />}>
          <div className="md:flex">
            <Nav />
            <Router>
              <Routes path="*" />
            </Router>
          </div>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
