import React from 'react';
import Title from '../Boards/Title';
import TutorialCard from '../Cards/TutorialCard/TutorialCard'
import './Tutorials.scss'

function Tutorials () {

    return(
        <React.Fragment>
            <Title title="Tutorials"/>
            <div className="tutorials">
                
                <TutorialCard
                header="Interview Preparation"
                sub_header="1nterview Prepartion Kit"
                summary="Curated challenges and tips based on learings from 1000+ companies to help you prepare "
                tutorial_button="View Tutorial"/>
                <TutorialCard
                header="30 Days of Code"
                sub_header="Learn to code in 30 days"
                summary="learn if-else statement, recusrion, data structures, oops and more. "
                tutorial_button="Resume Tutorial"/>

                <TutorialCard
                header="Tutorial"
                sub_header="!0 Days of Statistics"
                summary="Learn Probability, distribution, regression and more!"
                tutorial_button="Start Tutorial"/>

                <TutorialCard
                header="Tutorial"
                sub_header="10 days of Javascript"
                summary="Learn and imporove your Javascript fundamentals"
                tutorial_button="Resume Tutorial"/>
            </div>
        </React.Fragment>
    )
}

export default Tutorials