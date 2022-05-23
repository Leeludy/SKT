import { Route, Routes } from "react-router-dom";
import { IssueAlertsView } from "./IssueAlertsView.component";

import "./IssuesAlerts.css";

// main and children route for Missions
function IssuesAlerts() {
  return (
    <Routes>
      <Route path="/" element={<IssueAlertsView />} />
    </Routes>
  );
}

export { IssuesAlerts };
