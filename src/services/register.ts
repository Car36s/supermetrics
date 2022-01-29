import { fetchJson } from './fetch'

const client_id = 'ju16a6m81mhid5ue1z3v2g0uh'

export const register = async ({ email, name }: { email: string; name: string }) =>
  fetchJson('https://api.supermetrics.com/assignment/register', {
    method: 'POST',
    json: { name, email, client_id },
  })
