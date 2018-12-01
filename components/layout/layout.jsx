import React from 'react';
import Head from 'next/head';

import MainHeader from './mainHeader';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/static/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>Noticias MXN | Las noticias más relevantes de México</title>
        <meta name="description" content="Las últimas noticias de hoy en un solo lugar." />
      </Head>

      <MainHeader />

      { children }

      <style jsx global>
        {`
          body {
            background-color: #f5f6f6;
            color: #000;
            font-size: 26px;
            margin: 0;
            font-family: Helvetica;
          }

          a {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}

export default Layout;
