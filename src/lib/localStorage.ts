export const setItem = (key: string, data: string) => window?.localStorage.setItem(key, data)
export const getItem = (key: string) => window?.localStorage.getItem(key)
export const removeItem = (key: string) => window?.localStorage.removeItem(key)

export const SECRET = 'secret'
