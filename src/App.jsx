import { QueryClient, QueryClientProvider } from 'react-query'
import Login from './Auth/Login'

const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  )
}

// or export default
export { App }