import React from 'react'

const Loading = () => (
  <div className="loading" style={{
    fontFamily: 'sans-serif',
    padding: '2rem',
    textAlign: 'center',
    display: 'grid',
    placeContent: 'center',
    height: '100vh'
  }}>
    <p style={{marginBottom: 8, fontSize: '3rem', color: 'red'}}>Asociación Guardianes</p>
    <span>Cargando el <em>portal</em> ...</span>
  </div>
)

export default Loading
