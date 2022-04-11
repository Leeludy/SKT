import { useMutation, useQuery } from 'react-query'
import { getUsers, setUser } from './Auth.services'

function useMutationNewUser() {
  // useMutation take a lanbda with just one parameter
  return useMutation(({ login, password }) => setUser(login, password), {})
}

function useQueryUsers() {
  // create a query for a service
  return useQuery('useQueryUsers', getUsers)
}

export { useMutationNewUser, useQueryUsers } 
