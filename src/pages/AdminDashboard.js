import React from "react";

function AdminDashboard() {
  return (
    <div className="container py-5 text-center">

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Admin's Dashboard</h3>
            </div>

            <div className="card-body">
              <div className="row">

                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <h4>Employees</h4>
                    </div>
                    <div className="card-body">
                      <p>To manage pilots, product-admins and admins.</p>
                      <button type="button" className="btn btn-primary" href="#">Go Employees</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <h4>Missions</h4>
                    </div>
                    <div className="card-body">
                      <p>To manage missions, to attribute pilots and equipment...</p>
                      <button type="button" className="btn btn-primary" href="#">Go Missions</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <h4>Equipment</h4>
                    </div>
                    <div className="card-body">
                      <p>To view stock, equipment's detail, to manage equipment...</p>
                      <button type="button" className="btn btn-primary" href="#">Go Equipment</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <h4>Scan</h4>
                    </div>
                    <div className="card-body">
                      <p>Scan equipment to declare cycle of charge, or malfunction.</p>
                      <button type="button" className="btn btn-primary" href="#">Go Scan</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>   
          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminDashboard;