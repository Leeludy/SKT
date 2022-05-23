import { Route, Routes } from "react-router-dom";
import { NotificationsView } from "./NotificationsView.component";

// main and children route for Missions
function Notifications() {
  return (
    <Routes>
      <Route path="/*" element={<NotificationsView />} />
    </Routes>
  );
}

export { Notifications };
