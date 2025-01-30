import { SearchProvider } from './search/SearchProvider'

const providers = [SearchProvider]

interface ProviderProps {
  children: React.ReactNode
}

const composeProviders =
  (providers: React.FC<ProviderProps>[]) =>
  ({ children }: ProviderProps) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    )

export const AppProviders = composeProviders(providers)
