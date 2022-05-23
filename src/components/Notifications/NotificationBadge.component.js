import { Badge } from "react-bootstrap";
import { useQueryThresholdsAlertsNotifications } from "./Notifications.queries";

function NotificationBadge() {
  const queryThrAlertsNotifs = useQueryThresholdsAlertsNotifications();

  return (
    <Badge pill bg="light" text="dark">
      {queryThrAlertsNotifs.data?.length}
    </Badge>
  );
}

export { NotificationBadge };
