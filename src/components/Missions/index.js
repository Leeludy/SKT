import { Route, Routes } from "react-router-dom";

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
