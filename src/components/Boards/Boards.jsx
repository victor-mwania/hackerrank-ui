import React from 'react';
import './Boards.scss'
import Skills from '../Skills/Skills';
import UserSkills from '../UserSkills/UserSkills';
import PracticeSkills from '../PracticeSkills/PracticeSkills';
import Tutorials from '../Tutorials/Tutorials';

function Boards () {
    return(
        <React.Fragment>
            <div className="board">
                <Skills/>
                <UserSkills/>
                <PracticeSkills/>
                <Tutorials/>
            </div>
        </React.Fragment>
    )
}

export default Boards