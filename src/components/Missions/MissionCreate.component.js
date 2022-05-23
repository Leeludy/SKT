import { useMutationCreateMission } from "./Missions.queries";
import { MissionForm } from "./MissionForm.component";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function MissionCreate() {
  // React router previous pages
  let navigate = useNavigate();

  // Call configured react query mutation to post mission
  const missionMutation = useMutationCreateMission({
    onSuccess() {
      toast.success("Mission Created!");
      navigate("/missions");
    },
  });

  return (
    <Container
      fluid
      className="d-flex justify-content-center viewPort-container"
    >
      <Card className="col-11 mt-3">
        <Card.Body>
          <MissionForm
            onSubmit={(data) => missionMutation.mutate({ mission: data })}
          >
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button disabled={missionMutation.isLoading} variant="secondary">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={missionMutation.isLoading}
                variant="success"
              >
                Create
              </Button>
            </div>
          </MissionForm>
        </Card.Body>
      </Card>
    </Container>
  );
}

export { MissionCreate };
