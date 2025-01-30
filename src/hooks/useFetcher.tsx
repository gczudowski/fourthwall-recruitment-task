import { API_URL } from '../config/apiConfig'

const throwApiError = () => {
  throw new Error(
    `An error occurred while processing your request. Please try again later.`
  )
}

async function fetcher<T>({
  endpoint,
  method,
  body,
  queryParams,
}: {
  endpoint: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: object
  queryParams?: Record<string, string | number>
}): Promise<T> {
  const url = new URL(`${API_URL}${endpoint}`)

  if (queryParams && method === 'GET') {
    Object.keys(queryParams).forEach((key) =>
      url.searchParams.append(key, String(queryParams[key]))
    )
  }

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(method !== 'GET' && body ? { body: JSON.stringify(body) } : {}),
  }

  const response = await fetch(url.toString(), options)

  let responseJson
  try {
    responseJson = await response.json()
  } catch {
    throwApiError()
  }

  if (!response.ok) {
    throwApiError()
  }

  return responseJson
}

export const useFetcher = () => {
  return { fetcher }
}
