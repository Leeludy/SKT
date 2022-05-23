import { useQuery } from "react-query";
import { getThrAlertsNotifs } from "./Notifications.services";

// reactQuery 'get Alerts Notifications
function useQueryThresholdsAlertsNotifications(options) {
  return useQuery(
    ["useQueryThresholdAlertsNotifications"],
    () => getThrAlertsNotifs(),
    options
  );
}

export { useQueryThresholdsAlertsNotifications };
