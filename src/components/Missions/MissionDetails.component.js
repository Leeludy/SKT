import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { MissionForm } from "./MissionForm.component";
import { useMutationEditMission } from "./Missions.queries";
import { toast } from "react-toastify";
import { MissionDeleteModal } from "./MissionDelete.modal";
import { useQueryClient } from "react-query";

function MissionDetails({ mission }) {
  // Query watch state of the page
  const queryClient = useQueryClient();
  // UseState watch readOnly
  const [isReadOnly, setReadOnly] = useState(true);

  // UseState watch btn delete
  const [isDeleteModalDiplayed, setDisplayDeleteModal] = useState(false);

  // Call configured react query mutation to put mission
  const missionMutation = useMutationEditMission({
    onSuccess() {
      setReadOnly(true);
      toast.success("Modified with success!");
      queryClient.invalidateQueries("useQueryMissions");
    },
    onError() {
      toast.error("An error occured");
    },
  });

  // Toggle button submit modified form
  function renderBtnWhenEditable() {
    if (!isReadOnly) {
      return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button
            onClick={() => setReadOnly((v) => !v)}
            disabled={missionMutation.isLoading}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={missionMutation.isLoading}
            variant="success"
          >
            Edit
          </Button>
        </div>
      );
    }
  }

  return (
    <>
      <Container fluid>
        <Card border="light">
          <CardHeader>
            <div className="d-flex justify-content-between">
              <span>Details</span>
              <div className="gap-2 d-md-flex justify-content-md-end">
                <Button
                  onClick={() => {
                    setReadOnly((v) => !v);
                  }}
                  variant="outline-dark"
                >
                  Modify
                </Button>
                <Button
                  onClick={() => setDisplayDeleteModal(true)}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </div>
            </div>
          </CardHeader>
          <Card.Body>
            <MissionForm
              mission={mission}
              isReadOnly={isReadOnly}
              onSubmit={(data) =>
                missionMutation.mutate({ mission: { ...data, id: mission.id } })
              }
            >
              {renderBtnWhenEditable()}
            </MissionForm>
          </Card.Body>
        </Card>
      </Container>
      <MissionDeleteModal
        mission={mission}
        isShown={isDeleteModalDiplayed}
        closeModal={() => setDisplayDeleteModal(false)}
      />
      <Container fluid>
        <Card border="light">
          {/* remplace card by <MissionsEquipmentList /> */}
          <CardHeader>
            <span>Equipment</span>
          </CardHeader>
          <ul>
            <li>some equipment</li>
            <li>some equipment</li>
            <li>some equipment</li>
            <li>some equipment</li>
          </ul>
        </Card>
      </Container>
    </>
  );
}

export { MissionDetails };
