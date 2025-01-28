import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './App.styled'
import GithubRepositorySearchPage from './pages/GithubRepositorySearchPage/GithubRepositorySearchPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<GithubRepositorySearchPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
