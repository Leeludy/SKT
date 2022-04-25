import { useQuery } from "react-query";
import { getMissions, postMission } from "./Missions.services";

/* the key string 'useQueryMissions' normaly found as the first argument of the get function useQueryMissions
 * is here gived a name in the useQueryMissionName
 * so it will be more easy to interact with a variable instead of string in the application files
 */
const useQueryMissionsName = "useQueryMissions";
// reactQuery 'get Missions
function useQueryMissions(options) {
  return useQuery(useQueryMissionsName, () => getMissions(), options);
}

// reactQuery to create a mission
function useMutationCreateMission(options) {
  return useMutation(({ mission }) => postMission(mission), options);
}

export { useQueryMissions, useMutationCreateMission };
