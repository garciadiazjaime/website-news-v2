import React from 'react';

const MainHeader = () => (
  <div>
    <header>
      <h1>
        <a href="/" title="Los Titulares más recientes México">Los Titulares más recientes México</a>
      </h1>
    </header>
    <style jsx global>
      {`
      header {
        background-color: #363c48;
      }
      h1 {
        margin: 0;
        padding: 5px 5px 15px;
        font-size: 1em;
        font-weight: normal;
      }
      h1 a {
        color: #FFF;
      }
    `}
    </style>
  </div>
);

export default MainHeader;
