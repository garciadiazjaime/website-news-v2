import React from 'react';


export default () => (
  <div>
    Proyecto de
    <br />
    <a href="http://www.mintitmedia.com" title="Sofware Development Tijuana">Mint IT Media</a>
    <br />
    <a href="https://www.garitacenter.com" title="Reporte de Garitas San Diego / Tijuana">Reporte de Garitas</a>
    <br />
    <a href="http://www.playami.com" title="Qué comer en Playas de Tijuana">Qué comer en Playas</a>
    <style jsx>
      {`
      div {
        padding-top: 20px;
        text-align: center;
        color: #000;
        opacity: 0.7;
        font-size: 0.7em;
      }
      a {
        color: #000;
        opacity: 0.7;
      }
    `}
    </style>
  </div>
);
