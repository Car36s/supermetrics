type FetchInit = RequestInit & {
  json?: Record<string, unknown>
}

const headers = {
  'Content-Type': 'application/json',
}

export const fetchJson = async (url: string, options: FetchInit = { method: 'GET' }) => {
  try {
    if (options.json) {
      try {
        const body = JSON.stringify(options.json)
        options = { ...options, body }
        delete options.json
      } catch (err) {
        // json stringify failed
      }
    }

    const response = await fetch(url, { ...options, headers })
    if (!response?.ok) throw new Error('Not OK')

    const responseJson = response.json()
    if (!responseJson) throw new Error('No data')

    return responseJson
  } catch (err) {
    // do something
  }
}
