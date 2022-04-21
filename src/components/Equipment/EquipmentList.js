import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import CheckState from '../Utils/CheckState';
import IntToBool from '../Utils/IntToBool';

/**
 * Render a list of equipment as a table
 * @param {array} listEquipment array of equipment
 * @returns Render view of the array
 */
function EquipmentList(listEquipment) {

    return (
        <CTable striped>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell>ID</CTableHeaderCell>
                    <CTableHeaderCell>Model</CTableHeaderCell>
                    <CTableHeaderCell>Serial</CTableHeaderCell>
                    <CTableHeaderCell>Categorie</CTableHeaderCell>
                    <CTableHeaderCell>Location</CTableHeaderCell>
                    <CTableHeaderCell>Alert</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {
                    (
                        listEquipment.map((equipment) => (

                            <CTableRow key={equipment.id}>
                                <CTableDataCell>{equipment.id}</CTableDataCell>
                                <CTableDataCell>{equipment.model_name}</CTableDataCell>
                                <CTableDataCell>{equipment.serial_number}</CTableDataCell>
                                <CTableDataCell>{equipment.model_categorie}</CTableDataCell>
                                <CTableDataCell>{equipment.location}</CTableDataCell>
                                <CTableDataCell>{CheckState(IntToBool(equipment.is_alert))}</CTableDataCell>
                            </CTableRow>

                            )
                        )
                    )
                }
            </CTableBody>
        </CTable>
    );
}

export default EquipmentList