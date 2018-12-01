import getConfig from 'next/config'

const { publicRuntimeConfig: { apiUrl } = {} } = getConfig()

export async function getNews() {
  if (!apiUrl) {
    return []
  }

  const res = await fetch(`${apiUrl}/news?query={news{_id,title,description,image,url,source}}`)
  const data = await res.json()
  const { data: { news = [] } = {} } = data || {}
  return news
}
