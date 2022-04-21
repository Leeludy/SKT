import 'bootstrap/dist/css/bootstrap.min.css';

// Function to load and render Equipment component
function EquipmentList() {

  // View Render - Table equipment
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">List</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  {/* Render list equipment */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default EquipmentList;