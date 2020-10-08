import React from 'react';
import UserSkillCard from '../Cards/UserSkillsCard/UserSkillsCard';
import './InterViewPreparationKit.scss'

function InterviewPrepartionKit () {

    const kitStyles = {
        color: "#fff",
        backgroundColor: "#1ba94c",
        boxShadow: "0 4px 10px #1ba94d57"
      }
    return (
        <React.Fragment>
            <UserSkillCard
            header="InterView Prepartion"
            sub_header="Interview Prepartion Kit"
            summary="Curated challenges and tips based on learnings from 1000+ compare to help you prepare for your upcomming interviews"
            tutorial_button = "View"
            kitStyles={kitStyles}
            />
        </React.Fragment>
    )
}

export default InterviewPrepartionKit