import React from 'react'

const MainHeader = () => (
  <div>
    <header>
      <h1>Los Titulares más recientes México</h1>
    </header>
    <style jsx global>{`
      header {
        background-color: #363c48;
      }
      h1 {
        margin: 0;
        padding: 5px 5px 15px;
        color: #FFF;
        font-size: 1em;
        font-weight: normal;
      }
    `}
    </style>
  </div>
)

export default MainHeader
