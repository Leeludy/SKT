import React from "react";
import EquipmentComponant from "../components/Equipment/EquipmentComponant";

/**
 * Function that return the content of the equipment page
 * @returns Content of the equipment page
 */
function Equipment() {
  
  return (
    <div className="container py-5 text-center">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Equipment List</h3>
            </div>
            <div className="card-body">
              <EquipmentComponant/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Equipment;