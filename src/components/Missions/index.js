import { Route, Routes } from "react-router-dom";

import "./missions.css";
import { MissionsGlobal } from "./MissionsGlobal.component";
import { MissionCreate } from "./MissionCreate.component";

// main and children route for Missions
function Missions() {
  return (
    <Routes>
      <Route path="" element={<MissionsGlobal />} />
      <Route path="new" element={<MissionCreate />} />
    </Routes>
  );
}

export { Missions };
