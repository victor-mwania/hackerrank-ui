import React from 'react';
import './Skills.scss';
import Title from '../Boards/Title'
import SkillCard from '../Cards/SkillCard/SkillCard';
import StandOutCard from '../Cards/StandOutCard/StandOutCard';
import  ProblemSolvingIcon from '../../assets/icons/ProblemSolving.svg';
import  RestAPIIcon from '../../assets/icons/Rest_API.svg';
import  AngulaIcon from '../../assets/icons/Angular.svg';
import  JSIcon from '../../assets/icons/JavaScript.svg';
import  PythonIcon from '../../assets/icons/Python.svg';



function Skills () {
    return(
        <React.Fragment>
            <Title title ="Get Your Skills Certified"/>
            <div className="skills_list">
                <SkillCard title1={"Problem Solving"} title2={"(Basic)" }iconSrc={ProblemSolvingIcon}/>
                <SkillCard title1={"Rest API"} title2={"(Intermediate)" } iconSrc={RestAPIIcon}/>
                <SkillCard title1={"Angular (Basic)"} iconSrc={AngulaIcon}/>
                <SkillCard title1={"JavaScript (Basic)"} iconSrc={JSIcon}/>
                <SkillCard title1={"Python (Basic)"} iconSrc={PythonIcon}/>
                <StandOutCard/>
            </div>
        </React.Fragment>
    )
}

export default Skills