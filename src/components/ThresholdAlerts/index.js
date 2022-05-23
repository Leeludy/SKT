import { Route, Routes } from "react-router-dom";

import "./thresholds.css";
import { ThresholdAlertsList } from "./ThresholdAlertsList.component";

// main and children route for Missions
function ThresholdAlerts() {
  return (
    <Routes>
      <Route path="/" element={<ThresholdAlertsList />} />
    </Routes>
  );
}

export { ThresholdAlerts };
