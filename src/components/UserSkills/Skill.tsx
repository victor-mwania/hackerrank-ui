import React from 'react';
import UserSkillCard from '../Cards/UserSkillsCard/UserSkillsCard';

function Skill () {
    return (
        <React.Fragment>
            <UserSkillCard
            header="Problem Solving"
            sub_header="Interview Preparion Kit"
            summary="Curated challenges and tips based on learnings from 1000+ compare to help you prepare for your upcomming interviews"
            tutorial_button = "Continue Practice"
            />
            <UserSkillCard
            header="Tutorial"
            sub_header="10 Days of JS"
            summary="80%(1 challenge to the next start)"
            tutorial_button = "Continue Practice"
            />
            <UserSkillCard
            header="Tutorial"
            sub_header="30 Days of Code"
            summary="50% Solve 2 challenges to unlock this badge"
            tutorial_button = "Continue Practice"
            />
        </React.Fragment>
    )
}

export default Skill