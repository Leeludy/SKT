import { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import EquipmentList from './EquipmentList';

/**
 * Function to load and render Equipment component
 * @returns render Equipment component
 */
function EquipmentComponant() {

    const [equipmentList, setEquipmentList] = useState([]);

    // Make API request to get equipment
    useEffect(() => {
        axios.get('http://localhost:3030/equipment')
            .then((res) => {
                setEquipmentList(res.data);
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    // View Render - Componant equipment
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
                                    {EquipmentList(equipmentList)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default EquipmentComponant;