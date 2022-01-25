export const fetchJson = async (url: string, init = { method: 'GET' }) => {
  try {
    const response = await fetch(url, init)
    if (!response?.ok) throw new Error('Not OK')

    const data = response.json()
    if (!data) throw new Error('No data')

    return data
  } catch (err) {
    console.log(err)
  }
}
