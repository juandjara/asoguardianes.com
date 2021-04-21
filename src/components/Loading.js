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
    <p style={{marginBottom: 8, fontSize: '3rem', color: 'rgb(185, 28, 28)'}}>Asociación Guardianes</p>
    <p><em>Abriendo portal</em> ...</p>
  </div>
)

export default Loading
