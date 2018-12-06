const apiUrl = 'http://api-news.mintitmedia.com';
// const apiUrl = 'http://0.0.0.0:3030';

export default async function getNews(newsId) {
  const queryUrl = !newsId ? `${apiUrl}/news?query={news{_id,title,description,image,url,source}}`
    : `${apiUrl}/news?query={news(id:"5c087fe5a79db2110981f328"){_id,title,description,source,url,createdAt,analysis{sentiment,wordsFrequency{word,frequency}},googleResults{title,description,link}}}`;
  const res = await fetch(queryUrl);
  const data = await res.json();
  const { data: { news = [] } = {} } = data || {};

  return news;
}
