import fetch from 'isomorphic-unfetch'

export const apiUrl = process && process.env && process.env.API_URL

export async function getNews() {
  if (!apiUrl) {
    return null
  }
  
  const res = await fetch(`${apiUrl}/news?query={title,description,image,url,source}}`)
  return await res.json()
}
