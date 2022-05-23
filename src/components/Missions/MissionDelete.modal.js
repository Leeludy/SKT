import { useMutationdeleteMission } from "./Missions.queries";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

function MissionDeleteModal({ isShown, closeModal, mission }) {
  const queryClient = useQueryClient();

  const missionMutationDelete = useMutationdeleteMission({
    onSuccess() {
      toast.success("Mission Deleted!");
      queryClient.invalidateQueries("useQueryMissions");
      closeModal();
    },
  });

  return (
    <Modal show={isShown} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Mission</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you realy want to delete this mission?</Modal.Body>
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
