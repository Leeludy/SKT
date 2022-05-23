import { useQueryClient } from "react-query";
import { useQueryThresholdsAlertsNotifications } from "./Notifications.queries";
import { Alert, Container } from "react-bootstrap";
import { NotificationBadge } from "./NotificationBadge.component";

function NotificationsView() {
  const queryThrAlertsNotifs = useQueryThresholdsAlertsNotifications();
  // Queries Thresholds

  return (
    <Container fluid className="viewPort-container">
      <Container className="mt-3">
        {queryThrAlertsNotifs.data?.map((alert) => (
          <Alert key={alert.model_categorie} variant="danger">
            <Alert.Heading>{alert.model_categorie}</Alert.Heading>
            <p>
              Thresholds level have been reached for this equipment.
              <br />
              Remaining items in stock : {alert.numberOfEquipment}
            </p>
          </Alert>
        ))}
      </Container>
    </Container>
  );
}

export { NotificationsView };
