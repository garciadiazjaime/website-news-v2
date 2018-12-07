import React, { Component } from 'react';
import { withRouter } from 'next/router';

import Layout from '../components/layout/layout';
import getNews from '../services/news';

function renderDescription(description = []) {
  return description.length && description.map(item => (
    <p key={item.substring(0, 10).replace(/[^a-zA-Z]/gi, '')}>
      {item}
    </p>));
}

function getSentimentLabel(sentiment = 0) {
  if (sentiment > 0) {
    return 'Positiva :)';
  }

  if (sentiment < 0) {
    return 'Negativa :(';
  }

  return 'Neutra -.-';
}

function renderSentiment(sentiment) {
  return (
    <div>
      <h3>Califación:</h3>
      {getSentimentLabel(sentiment)}
    </div>
  );
}

function renderFrequency(wordsFrequency = []) {
  if (!wordsFrequency.length) {
    return null;
  }

  return (
    <div>
      <h3>Palabras frecuentes:</h3>
      {wordsFrequency.slice(0, 5).map(({ word, frequency }) => (
        <p key={word}>
          {word}
          {' '}
          (
          {frequency}
          )
        </p>
      ))}
    </div>
  );
}

function renderAnalysis({ sentiment, wordsFrequency } = {}) {
  return (
    <div>
      {renderFrequency(wordsFrequency)}
      {renderSentiment(sentiment)}
    </div>
  );
}

function renderGoogleResults(results = []) {
  if (!results.length) {
    return null;
  }

  return (
    <div>
      <h3>Resultados en Google:</h3>
      <ul>
        {results.map(({ title, description, link }) => (
          <li key={link}>
            <div>
              <a href={link} title={title} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
            <div>{description}</div>
          </li>
        ))}
      </ul>
    </div>);
}

function renderNews(news = []) {
  if (!news || !news.length) {
    return null;
  }

  const item = news[0];

  return (
    <div key={item._id} className="news-entry">
      { item.image && (<img src={item.image} alt={item.title} />) }
      <div className="content">
        <h2>
          <a href={`/noticia?id=${item._id}`} title={item.title}>
            {item.title}
          </a>
        </h2>
        { renderDescription(item.description) }
        <div>
          <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer">
            Nota Extraida de
            {' '}
            {item.source}
          </a>
        </div>
        { renderAnalysis(item.analysis)}
        { renderGoogleResults(item.googleResults)}
      </div>
      <style jsx global>
        {`
  				.news-entry {
  					margin: 20px 0 0;
  					padding: 2px 0 10px;
  					background-color: #FFF;
  				}
  				.news-entry .content {
  					padding: 0 5px;
  				}
  				.news-entry img {
  					width: 100%;
  					height: auto;
  				}
  				.news-entry p {
  					margin: 0;
  					opacity: 0.8;
  				}
  				.news-entry a {
  					color: #000;
  					opacity: 0.7;
  				}
  				.news-entry h2 {
  					margin: 5px 0;
  				}
  			`}
      </style>
    </div>
  );
}

class HomePage extends Component {
  constructor(args) {
    super(args);
    this.state = {
      news: [],
    };
  }

  async componentDidMount() {
    const { router: { query: { id: newsId } } } = this.props;
    const news = await getNews(newsId);

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

export default withRouter(HomePage);
