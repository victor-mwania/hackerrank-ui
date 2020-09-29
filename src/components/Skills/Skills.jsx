import React from 'react';
import './Skills.scss';
import SkillCard from '../Cards/SkillCard';

function Skills () {
    return(
        <React.Fragment>
            <div className="skills">
                <div className="skills_header">
                    <h4>Get Your Skills Certified</h4>
                    <div className="skills_list">
                    <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>
                    <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>

                    <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>

                    <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>

                    <SkillCard title1={"Problem Solving"} title2={"(Basic)" }/>
                    </div>
                    

                </div>
            </div>
        </React.Fragment>
    )
}

export default Skills