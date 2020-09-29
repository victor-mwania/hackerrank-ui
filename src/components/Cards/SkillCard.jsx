import React from 'react';
import {ReactComponent as ProblemSolvingIcon} from '../../assets/icons/ProblemSolving.svg';
import './SkillCard.scss'

function SkillCard(props) {

    const {title1, title2} = props
        return(
        <React.Fragment>
            <div className="skill_card">
                <div className="skill_card_info">
                    <div className="title">
                        <h3>{title1}</h3>
                        <h3>{title2}</h3>
                    </div>
                    <div className="card_button">
                        <button>Get Certified</button>
                    </div>
                </div>
                <div className="icon">
                    <ProblemSolvingIcon height="150px" width="150px" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SkillCard