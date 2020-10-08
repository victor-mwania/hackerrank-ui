import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SubNavbar from '../components/SubNavbar/SubNavbar';
import Boards from '../components/Boards/Boards';
import Footer from '../components/Footer/Footer';


function Dashboard () {
    return(
        <div>
            <Navbar/>
            <SubNavbar/>
            <Boards/>
            <Footer/>
        </div>
    )
}

export default Dashboard;

