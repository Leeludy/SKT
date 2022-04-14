import React from "react";
import UsersFetch from "../components/Users";

function Admin() {
  return (
    <div className="container py-5 text-center">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Admin Dashboard</h3>
            </div>
            <div className="card-body">
              <UsersFetch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<UsersFetch />
export default Admin;