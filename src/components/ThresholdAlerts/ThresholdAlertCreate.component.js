import { ThresholdAlertsForm } from "./ThresholdAlertsForm.component";
import { useQueryClient } from "react-query";
import { useMutationCreateThrAlert } from "./ThresholdAlerts.queries";
import { toast } from "react-toastify";
import { Button, Card, Container } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";

function ThresholdAlertsCreate() {
  // Query watch state of the page
  const queryClient = useQueryClient();
  // Query post Threshol
  const thresholdMutation = useMutationCreateThrAlert({
    onSuccess() {
      toast.success("Alert configured with success!");
      queryClient.invalidateQueries("useQueryThresholdAlerts");
      queryClient.invalidateQueries("useQueryThresholdAlertsNotifications");
    },
    onError() {
      toast.error("An error occured");
    },
  });

  function createThresoldBtn() {
    return (
      <Button
        type="submit"
        disabled={thresholdMutation.isLoading}
        variant="outline-white"
      >
        <PlusCircleFill color="green" size={40} />
      </Button>
    );
  }
  return (
    <Container className="col-3 fixed-right">
      <Card>
        <Card.Header>
          <Card.Title className="text-center">
            Program a Threshold Alert
          </Card.Title>
        </Card.Header>
        <Card.Body className=" pl-3">
          <ThresholdAlertsForm
            onSubmit={(data) => thresholdMutation.mutate({ data })}
          >
            {createThresoldBtn()}
          </ThresholdAlertsForm>
        </Card.Body>
      </Card>
    </Container>
  );
}

export { ThresholdAlertsCreate };
