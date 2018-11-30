import fetch from 'isomorphic-unfetch'

export const apiUrl = process.env.API_URL

export async function getNews() {
  const res = await fetch(`${apiUrl}/news?query={news{title,description,image,url,source}}`)
  return await res.json()
}
