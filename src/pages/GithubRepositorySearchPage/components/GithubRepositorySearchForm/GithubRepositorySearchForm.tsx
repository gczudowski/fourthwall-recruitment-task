import { useEffect } from 'react'
import Button from '../../../../components/ui/button/Button'
import Input from '../../../../components/ui/input/Input'
import useGitubRepositorySearch from '../../hooks/useGithubRepositorySearch'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { SearchFormWrapper } from './GithubRepositorySearchForm.styled'
import Label from '../../../../components/ui/label/Label'

const GithubRepositorySearchForm = () => {
  const { onSearchSubmit } = useGitubRepositorySearch()
  const [searchParams] = useSearchParams()
  const queryFromUrl = searchParams.get('query') || ''

  const { register, setValue, handleSubmit, setFocus } = useForm<{
    query: string
  }>({
    defaultValues: {
      query: '',
    },
  })

  useEffect(() => {
    setValue('query', queryFromUrl)
  }, [queryFromUrl, setValue])

  useEffect(() => {
    setFocus('query')
  }, [setFocus])

  return (
    <form onSubmit={handleSubmit(onSearchSubmit)}>
      <SearchFormWrapper>
        <Label text="Search by repository name" htmlFor="queryInput" />
        <Input
          id="queryInput"
          placeholder="Type something here"
          {...register('query')}
        />
        <Button type="submit" text="Search" />
      </SearchFormWrapper>
    </form>
  )
}

export default GithubRepositorySearchForm
