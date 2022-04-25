import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BsBell, BsBoxSeam, BsFillBriefcaseFill, BsPeople, BsUpcScan } from "react-icons/bs";

function SidebarAdmin() {
  return (

    <SideNav style={{ background: '#494949', top: 90 }}

    onSelect={(selected) => {
        // Add your code here
        }
    }
    >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="Admin">

        <NavItem eventKey="Alerts">
            <NavIcon>
                <BsBell style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Alerts
            </NavText>
        </NavItem>

        <NavItem eventKey="Users">
            <NavIcon>
                <BsPeople style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Users
            </NavText>
            <NavItem eventKey="viewUsers">
                <NavText>
                    view users
                </NavText>
            </NavItem>
            <NavItem eventKey="addUser">
                <NavText>
                    add user    
                </NavText>
            </NavItem>
        </NavItem>

        <NavItem eventKey="Missions">
            <NavIcon>
                <BsFillBriefcaseFill style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Missions
            </NavText>
            <NavItem eventKey="viewMissions">
                <NavText>
                    view missions
                </NavText>
            </NavItem>
            <NavItem eventKey="addMission">
                <NavText>
                    add mission    
                </NavText>
            </NavItem>
        </NavItem>

        <NavItem eventKey="Equipment">
            <NavIcon>
                <BsBoxSeam style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Equipment
            </NavText>
            <NavItem eventKey="viewEquipment">
                <NavText>
                  view equipment
                </NavText>
            </NavItem>
            <NavItem eventKey="addEquipment">
                <NavText>
                  add equipment    
                </NavText>
            </NavItem>
        </NavItem>

        <NavItem eventKey="Scan">
            <NavIcon>
                <BsUpcScan style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Scan
            </NavText>
            <NavItem eventKey="declareCharge">
                <NavText>
                  declare charge
                </NavText>
            </NavItem>
            <NavItem eventKey="declareMalfunction">
                <NavText>
                  declare malfunction    
                </NavText>
            </NavItem>
        </NavItem>

    </SideNav.Nav>
</SideNav>
  );
}

export default SidebarAdmin;