import React, { Component } from 'react'

import Layout from '../components/layout/layout'
import { getNews } from '../services/news'

class HomePage extends Component {

  constructor(args) {
    super(args)
    this.state = {
      news: []
    }
  }

  async componentDidMount() {
    const news = await getNews()
    this.setState({ news })
  }

  renderDescription(description) {
    return description.slice(0, 3).map(item => (
      <p key={item.substring(0, 10).replace(/[^a-zA-Z]/gi, '')}>
        {item}
      </p>
    ))
  }
  
  renderNews(news = []) {
    return news.length && news.map(item => (
      <div key={item._id} className="entity">
        {
          item.image && (<img src={item.image} alt={item.title} />)
        }
        <div className="content">
          <h2><a href={item.link} title={item.title} target="_blank" rel="noopener noreferrer">{item.title}</a></h2>
          { item.source && (<p>{item.source}</p>) }
          { this.renderDescription(item.description) }
        </div>
        <style jsx global>
          {`
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
    )) || ':('
  }
  

  render() {
    const { news } = this.state

    return (
      <Layout>
        { this.renderNews(news) }
      </Layout>
    )
  }
}

export default HomePage
