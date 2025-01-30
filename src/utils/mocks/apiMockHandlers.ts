import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.github.com/search/repositories', ({ request }) => {
    const url = new URL(request.url)
    const query = url.searchParams.get('q') || ''
    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const perPage = parseInt(url.searchParams.get('per_page') || '20', 10)

    return HttpResponse.json({
      items: Array.from({ length: perPage }, (_, index) => {
        const id = index + 1 + (page - 1) * perPage
        return {
          id,
          name: `${query}-repo-${id}`,
          owner: {
            login: `${query}-user-${id}`,
          },
          html_url: `https://github.com/${query}-repo-${id}`,
          created_at: `2023-01-${String(index + 1).padStart(2, '0')}`,
          stargazers_count: id,
        }
      }),
    })
  }),
]
