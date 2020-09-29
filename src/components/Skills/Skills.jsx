import React from 'react';
import './Skills.scss';
import Title from '../Boards/Title'
import SkillCard from '../Cards/SkillCard/SkillCard';
import StandOutCard from '../Cards/StandOutCard/StandOutCard';

function Skills () {
    return(
        <React.Fragment>
            <Title title ="Get Your Skills Certified"/>
            <div className="skills_list">
                <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>
                <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>
                <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>
                <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>
                <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>
                <StandOutCard/>
            </div>
        </React.Fragment>
    )
}

export default Skills