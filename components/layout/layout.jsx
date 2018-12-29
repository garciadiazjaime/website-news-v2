import React, { Component } from 'react';
import Head from 'next/head';

import MainHeader from './mainHeader';
import Footer from './footer';

function gtag() {
  window.dataLayer.push(arguments); // eslint-disable-line
}

class Layout extends Component {
  componentDidMount() {
    window.dataLayer = window.dataLayer || []; // eslint-disable-line
    gtag('js', new Date());
    gtag('config', 'UA-103145866-1');
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="icon" href="/static/images/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />

          <title>Noticias México | Las noticias más relevantes de México</title>
          <meta name="description" content="Las últimas noticias de hoy en un solo lugar." />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-103145866-1" />
        </Head>

        <MainHeader />

        { this.props.children }

        <Footer />

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
}

export default Layout;
