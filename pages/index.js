import React from 'react'
import LazyLoad from 'react-lazyload'

import Layout from '../components/layout/layout'
import { getNews } from '../services/news'

const renderDescription = description => description.slice(0, 3).map(item => (
  <p key={item.substring(0, 10).replace(/[^a-zA-Z]/gi, '')}>
    {item}
  </p>
))

const renderPlace = (news) => {
  return news.map(item => (
    <div key={item._id} className="entity">
      {
        item.image ?
          <LazyLoad height={200} once>
            <img src={item.image} alt={item.title} />
          </LazyLoad> : null
      }
      <div className="content">
        <h2><a href={item.link} title={item.title} target="_blank">{item.title}</a></h2>
        { item.source ? <p>{item.source}</p> : null }
        { renderDescription(item.description) }
      </div>
      <style jsx global>{`
        .entity {
          margin: 20px 0 0;
          padding: 2px 0 10px;
          background-color: #FFF;
        }
        .content {
          padding: 0 5px;
        }
        img {
          width: 100%;
          height: auto;
        }
        p {
          margin: 0;
        }
        a {
          color: #000;
          opacity: 0.7;
        }
        h2 {
          margin: 5px 0;
        }
      `}
      </style>
    </div>
  ))
}

const HomePage = ({ news }) => (
  <Layout>
    {renderPlace(news)}
  </Layout>
)

HomePage.getInitialProps = async () => {
  const news = await getNews()
  return { news: news.data }
}

export default HomePage
