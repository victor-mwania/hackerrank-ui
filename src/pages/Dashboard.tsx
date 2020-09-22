import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Skills from '../components/Skills/Skills';
import SubNavbar from '../components/SubNavbar/SubNavbar';


function Dashboard () {
    return(
        <div>
            <Navbar/>
            <SubNavbar/>
            <Skills/>
        </div>
    )
}

export default Dashboard;

