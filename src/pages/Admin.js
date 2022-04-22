import React from "react";
import Users from "../components/Users/ApiUsers.js";

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
              <Users/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;