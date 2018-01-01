import React, { Component } from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga';

import MainHeader from './mainHeader'

class Layout extends Component {

  componentDidMount() {
    ReactGA.initialize('UA-103145866-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
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

        {this.props.children}

        <style jsx global>{`
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
    )
  }
}

export default Layout
