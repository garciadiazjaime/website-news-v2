import React, { Component } from 'react';

import Layout from '../components/layout/layout';
import getNews from '../services/news';

function getStringKey(text = '', index = 0) {
  return `${text.substring(0, 10).replace(/[^a-zA-Z]/gi, '')}_${index}`;
}

const renderDescription = description => description.slice(0, 3).map((text, index) => (
  <p key={getStringKey(text, index)}>
    {text}
  </p>
));

const renderNews = (news = []) => (news.length ? news.map(item => (
  <div key={item._id} className="entity">
    {
        item.image && (<img src={item.image} alt={item.title} />)
      }
    <div className="content">
      <h2>
        <a href={`/noticia?id=${item._id}`} title={item.title}>
          {item.title}
        </a>
      </h2>
      { renderDescription(item.description) }
      { item.source && (<p>{item.source}</p>) }
    </div>
    <style jsx global>
      {`
        .entity {
          margin: 20px 0 0;
          padding: 2px 0 10px;
          background-color: #FFF;
        }
        .entity content {
          padding: 0 5px;
        }
        .entity img {
          width: 100%;
          height: auto;
        }
        .entity p {
          margin: 0;
          opacity: 0.8;
        }
        .entity a {
          color: #000;
          opacity: 0.7;
        }
        .entity h2 {
          margin: 5px 0;
        }
      `}
    </style>
  </div>
)) : 'cargando las noticias de hoy...');

class HomePage extends Component {
  constructor(args) {
    super(args);
    this.state = {
      news: [],
    };
  }

  async componentDidMount() {
    const news = await getNews();
    this.setState({ news });
  }

  render() {
    const { news } = this.state;

    return (
      <Layout>
        { renderNews(news) }
      </Layout>
    );
  }
}

export default HomePage;
