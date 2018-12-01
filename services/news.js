const apiUrl = 'http://api-news.mintitmedia.com';

export default async function getNews() {
  const res = await fetch(`${apiUrl}/news?query={news{_id,title,description,image,url,source}}`);
  const data = await res.json();
  const { data: { news = [] } = {} } = data || {};
  return news;
}
