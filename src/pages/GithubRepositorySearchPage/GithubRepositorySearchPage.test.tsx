import { renderWithProviders } from '../../utils/tests/testUtils'
import GithubRepositorySearchPage from './GithubRepositorySearchPage'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('github repository search page', () => {
  describe('UI elements', () => {
    it('can see the proper page title', async () => {
      renderWithProviders(<GithubRepositorySearchPage />)

      expect(
        await screen.findByText('GitHub Repository Search App')
      ).toBeInTheDocument()
    })

    it('can see a search input with proper label', async () => {
      renderWithProviders(<GithubRepositorySearchPage />)

      expect(
        await screen.findByLabelText('Search by repository name')
      ).toBeInTheDocument()
    })

    it('can see a search button', async () => {
      renderWithProviders(<GithubRepositorySearchPage />)

      expect(
        await screen.findByRole('button', { name: /Search/i })
      ).toBeInTheDocument()
    })

    it('has proper page title', async () => {
      renderWithProviders(<GithubRepositorySearchPage />)

      expect(
        await screen.findByText('GitHub Repository Search App')
      ).toBeInTheDocument()
    })
  })

  describe('features', () => {
    it('can use the form and see repositories list', async () => {
      renderWithProviders(<GithubRepositorySearchPage />)

      await userEvent.type(
        await screen.findByLabelText('Search by repository name'),
        'test'
      )

      await userEvent.click(
        await screen.findByRole('button', { name: /Search/ })
      )

      const cells = await screen.findAllByRole('cell')
      const rows = await screen.findAllByRole('row')

      expect(await screen.findByText('Page: 1')).toBeInTheDocument()
      expect(
        cells.find((cell) => cell.innerHTML === 'test-repo-20')
      ).toBeInTheDocument()
      expect(
        cells.find((cell) => cell.innerHTML === 'test-user-15')
      ).toBeInTheDocument()
      expect(
        cells.find((cell) => cell.innerHTML === '1/10/2023')
      ).toBeInTheDocument()
      expect(cells.find((cell) => cell.innerHTML === '5')).toBeInTheDocument()
      expect(rows.length).toEqual(20)
    })

    it('can see form with pre-filled data when form data was given in the url', async () => {
      window.history.pushState({}, '', '/?query=prefilled123&page=3')

      renderWithProviders(<GithubRepositorySearchPage />)

      expect(
        (
          (await screen.findByLabelText(
            'Search by repository name'
          )) as HTMLInputElement
        ).value
      ).toEqual('prefilled123')

      expect(await screen.findByText('Page: 3')).toBeInTheDocument()

      const rows = await screen.findAllByRole('row')

      expect(rows.length).toEqual(20)
    })

    it('can see an empty form data when url was not given', async () => {
      renderWithProviders(<GithubRepositorySearchPage />)

      expect(
        (
          (await screen.findByLabelText(
            'Search by repository name'
          )) as HTMLInputElement
        ).value
      ).toEqual('')

      expect(screen.queryByText(/Page/)).not.toBeInTheDocument()

      const rows = screen.queryAllByRole('row')

      expect(rows.length).toEqual(0)
    })

    it('can use the form and switch to the next page', async () => {
      renderWithProviders(<GithubRepositorySearchPage />)

      await userEvent.type(
        await screen.findByLabelText('Search by repository name'),
        'test'
      )

      await userEvent.click(
        await screen.findByRole('button', { name: /Search/ })
      )

      expect(await screen.findByText('Page: 1')).toBeInTheDocument()

      await userEvent.click(await screen.findByRole('button', { name: /Next/ }))

      expect(await screen.findByText('Page: 2')).toBeInTheDocument()

      const cells = await screen.findAllByRole('cell')
      const rows = await screen.findAllByRole('row')

      expect(
        cells.find((cell) => cell.innerHTML === 'test-repo-40')
      ).toBeInTheDocument()
      expect(
        cells.find((cell) => cell.innerHTML === 'test-user-35')
      ).toBeInTheDocument()
      expect(
        cells.find((cell) => cell.innerHTML === '1/15/2023')
      ).toBeInTheDocument()
      expect(cells.find((cell) => cell.innerHTML === '25')).toBeInTheDocument()
      expect(rows.length).toEqual(20)
    })

    it('can use the form to visit a github repo', async () => {
      renderWithProviders(<GithubRepositorySearchPage />)

      await userEvent.type(
        await screen.findByLabelText('Search by repository name'),
        'test'
      )

      await userEvent.click(
        await screen.findByRole('button', { name: /Search/ })
      )

      const rows = await screen.findAllByRole('row')

      await userEvent.click(rows[0] as HTMLTableCellElement)

      expect(window.open).toHaveBeenCalledWith(
        'https://github.com/test-repo-1',
        '_blank'
      )
    })
  })
})
