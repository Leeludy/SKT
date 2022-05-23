import { Route, Routes } from "react-router-dom";
import { IssueAlertsView } from "../IssuesAlerts/IssueAlertsView.component";
import { Notifications } from "../Notifications";
import { ThresholdAlerts } from "../ThresholdAlerts";

// main and children route for Missions
function Alerts() {
  return (
    <Routes>
      <Route path="/thresholds/*" element={<ThresholdAlerts />} />
      <Route path="/issues" element={<IssueAlertsView />} />
      <Route path="/notifications/*" element={<Notifications />} />
    </Routes>
  );
}

export { Alerts };
