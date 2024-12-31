import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import GitCards from './pages/gitcards/GitCards'
import './index.css'

const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GitCards />
    </QueryClientProvider>
  )
}

