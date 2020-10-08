import React from 'react';
import Title from '../Boards/Title';
import InterViewPreparationKit from './InterViewPreparationKit';
import Skill from './Skill';
import './UserSkills.scss'

function UserSkill () {

    return(
        <React.Fragment>
            <Title title="Your Skills"/>
            <div className="user_skills">
                <InterViewPreparationKit/>
                <Skill/>
            </div>
        </React.Fragment>
    )
}

export default UserSkill