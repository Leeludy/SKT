/* 
 * A query is a declarative dependency on an asynchronous source of data that is tied to a unique key. 
 * A query can be used with any Promise based method (including GET and POST methods) to fetch data from a server. 
 * If your method modifies data on the server, we recommend using Mutations instead.
 * <QueryClientProvider client={queryClient}> is initialised in App.jsx
 * https://react-query.tanstack.com/guides/queries
 */
import { useMutation, useQuery } from 'react-query'
import { getUsers, setUser } from './Auth.services'

/* 
 * use useMutation() hook from react-query to post/create new login data for a user
 * with setUser() defined in the Services
*/
function useMutationNewUser() {
  // useMutation take a lanbda with just one parameter placed in beetwin {}
  return useMutation(({ login, password }) => setUser(login, password), {})
}


/* 
 * use useQuery() hook from react-query to get users list
 * with getUsers() defined in the Services
 * 
*/
function useQueryUsers() {
  // create a query for a service
  return useQuery('useQueryUsers', getUsers)
}

export { useMutationNewUser, useQueryUsers } 
