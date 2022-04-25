import { useMutationCreateMission } from "./Missions.queries";
import { MissionForm } from "./MissionForm.component";
import { Button, Card } from "react-bootstrap";

function MissionCreate() {
  // Call configured react query mutation to post mission
  const missionMutation = useMutationCreateMission();

  return (
    <Card>
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
  );
}

export { MissionCreate };
