// import { fetchJson } from './fetch'

export const register = async (json: { email: string; name: string }) => {
  console.log(json)
  return Promise.resolve({
    meta: {
      request_id: 'EMhA4QzFmITvnBNRjcP3Qwuc6xbbHoui'
    },
    data: {
      client_id: 'ju16a6m81mhid5ue1z3v2g0uh',
      email: 'foo@bar.com',
      sl_token: 'smslt_5943fae9a65_13e20f63ce4e'
    }
  })
}
// fetchJson('https://api.supermetrics.com/assignment/register')
