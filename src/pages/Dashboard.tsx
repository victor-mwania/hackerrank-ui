import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SubNavbar from '../components/SubNavbar/SubNavbar';
import Boards from '../components/Boards/Boards';


function Dashboard () {
    return(
        <div>
            <Navbar/>
            <SubNavbar/>
            <Boards/>
        </div>
    )
}

export default Dashboard;

