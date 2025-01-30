import '@testing-library/jest-dom'
import { server } from './utils/mocks/apiMockServer'
import { cleanup } from '@testing-library/react'

beforeAll(() => server.listen())

afterEach(async () => {
  server.resetHandlers()
  window.history.pushState({}, '', '/')
  cleanup()
})

afterAll(() => server.close())

window.open = vi.fn()
