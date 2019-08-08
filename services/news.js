const API_URL = `http://${
  process && process.env.NODE_ENV !== 'production'
    ? '0.0.0.0:3030'
    : 'api-news.mintitmedia.com'}`;

export default async function getNews(source) {
  let newsId;
  if (source === 'single') {
    const parsedUrl = new URL(window.location);
    newsId = parsedUrl.searchParams.get('id');
  }
  const queryUrl = !newsId ? `${API_URL}/news?query={news{_id,title,description,image,url,source}}`
    : `${API_URL}/news?query={news(id:"${newsId}"){_id,title,description,source,url,createdAt,analysis{sentiment,wordsFrequency{word,frequency}},googleResults{title,description,link}}}`;
  const res = await fetch(queryUrl);
  const data = await res.json();
  const { data: { news = [] } = {} } = data || {};

  return news;
}
