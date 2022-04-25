import React from "react";

import { useQueryMissions } from "./Missions.queries";
import { Container, Accordion, Button } from "react-bootstrap";

// Function to load and render Missions component as an Accordion
function MissionsList() {
  const queryMissions = useQueryMissions();

  // Error message query fecthing data and reload btn
  if (queryMissions.isError) {
    return (
      <Container fluid>
        <div className="text-center">
          <span>An error occured, please retry </span>
          <Button onClick={queryMissions.refetch}>retry</Button>
        </div>
      </Container>
    );
  }

  // Query loading and Spinner
  if (queryMissions.isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  // Accordion view with dynamic hydratation
  return (
    <Accordion defaultActiveKey="0" flush>
      {queryMissions.data.map((mission) => (
        <Accordion.Item key={mission.id} eventKey={mission.id}>
          <Accordion.Header className="flex">
            <div className="row  justify-content-between">
              <div className="col">
                {mission.title}
                <div>
                  {mission.start_date}/{mission.end_date}
                </div>
              </div>

              <div className="col">
                {/* {equipment.drone} {mission.pilot} */}
                Drone Pilots
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <MissionDetails mission={mission} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default MissionsList;
