import { useMutationEditThrAlert } from "./ThresholdAlerts.queries";

import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { ThresholdAlertsForm } from "./ThresholdAlertsForm.component";

function ThresholdAlertModifyModal({ thrAlert, isShown, closeModal }) {
  const queryClient = useQueryClient();

  const thresholdMutation = useMutationEditThrAlert({
    onSuccess() {
      toast.success("Threshold modified!");
      queryClient.invalidateQueries("useQueryThresholdAlerts");
      queryClient.invalidateQueries("useQueryThresholdAlertsNotifications");
      closeModal();
    },
  });

  if (!thrAlert) {
    return null;
  }

  function modifyThresholdBtn() {
    return (
      <Button
        type="submit"
        disabled={thresholdMutation.isLoading}
        variant="success"
      >
        Edit
      </Button>
    );
  }

  return (
    <Modal show={isShown} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Threshold on {thrAlert.ref_equipment}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Choose a new level
        <ThresholdAlertsForm
          thrAlert={thrAlert}
          onSubmit={(data) =>
            thresholdMutation.mutate({
              thrAlert: { ...data, id: thrAlert.id },
            })
          }
        >
          {modifyThresholdBtn()}
        </ThresholdAlertsForm>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { ThresholdAlertModifyModal };
