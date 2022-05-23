import React, { useState } from "react";
import { useQueryClient } from "react-query";
import {
  useMutationDeleteThrAlert,
  useQueryThresholdAlerts,
} from "./ThresholdAlerts.queries";
import { Card, Button, Container, ButtonGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { ThresholdAlertModifyModal } from "./ThresholdAlertsModify.modal";
import { ThresholdAlertsCreate } from "./ThresholdAlertCreate.component";

function ThresholdAlertsList() {
  const queryClient = useQueryClient();
  const queryThrAlerts = useQueryThresholdAlerts();
  const thrAlertsDeleteMutation = useMutationDeleteThrAlert({
    onSuccess() {
      toast.success("Threshold deleted!");
      queryClient.invalidateQueries("useQueryThresholdAlerts");
    },
  });

  // UseState watch btn modify
  const [modifiedThreshold, setModifiedThreshold] = useState(null);

  // Error message query fecthing data and reload btn
  if (queryThrAlerts.isError) {
    return (
      <Container fluid>
        <div className="text-center">
          <span>An error occured, please retry </span>
          <Button onClick={queryThrAlerts.refetch}>retry</Button>
        </div>
      </Container>
    );
  }

  // Query loading and Spinner
  if (queryThrAlerts.isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Container fluid className="d-flex viewPort-container">
        <Container style={{ marginLeft: 0 }}>
          {queryThrAlerts.data.map((thrAlert) => (
            <Card
              key={thrAlert.id}
              eventkey={thrAlert.id}
              border="dark"
              className="mt-2 "
            >
              <Card.Header className="card-header">
                <Card.Title>{thrAlert.ref_equipment}</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-between">
                <Card.Text>
                  Threshold configured at {thrAlert.threshold_level} remaining
                  items
                </Card.Text>
                <ButtonGroup>
                  <Button
                    type="submit"
                    onClick={() => thrAlertsDeleteMutation.mutate({ thrAlert })}
                    variant="outline-secondary"
                  >
                    Delete
                  </Button>
                  <Button
                    type="submit"
                    onClick={() => setModifiedThreshold(thrAlert)}
                    variant="outline-success"
                  >
                    Modify
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          ))}
          <ThresholdAlertModifyModal
            thrAlert={modifiedThreshold}
            isShown={!!modifiedThreshold}
            closeModal={() => setModifiedThreshold(null)}
          />
        </Container>
        <ThresholdAlertsCreate />
      </Container>
    </>
  );
}

export { ThresholdAlertsList };
