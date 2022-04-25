import { useMutationdeleteMission } from "./Missions.queries";
import { useQueryMissions } from "./Missions.queries";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

function MissionDeleteModal({ isShown, closeModal, mission }) {
  const queryClient = useQueryClient();

  const missionMutationDelete = useMutationdeleteMission({
    onSuccess() {
      toast.success("Deleted with success!");
      queryClient.invalidateQueries("useQueryMissions");
      closeModal();
    },
  });

  return (
    <Modal show={isShown} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button
          onClick={() => missionMutationDelete.mutate({ mission })}
          variant="success"
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { MissionDeleteModal };
