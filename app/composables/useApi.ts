export function useApi() {
  const baseURL = '/api/bff'

  const token = useCookie<string | undefined>('access_token')

  const api = $fetch.create({
    baseURL,
    async onRequest({ options }) {
      options.headers = {
        ...(options.headers as any),
        ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
      }
    },
  })

  return api
}
