import fetch from 'isomorphic-unfetch'

export const apiUrl = process && process.env && process.env.API_URL ? process.env.API_URL : null

export async function getNews() {
  const res = await fetch(`${apiUrl}api/news`)
  return await res.json()
}
