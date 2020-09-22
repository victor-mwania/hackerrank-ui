import React from 'react';

import './Skills.scss'
import {ReactComponent as ProblemSolvingIcon} from '../../assets/icons/ProblemSolving.svg'

function Skills () {
    return(
        <React.Fragment>
            <div className="skills">
                <div className="skills_header">
                    <h4>Get Your Skills Certified</h4>
                </div>
                <div className="skills_list">
                    <div className="skill_card">
                        <div className="skill_card_info">
                            <div className="title">
                                <h3>Problem Solving</h3>
                                <h3>(Basic)</h3>
                            </div>
                            <div className="card_button">
                                <button>Get Certified</button>
                            </div>
                        </div>
                        <div className="icon">
                            <ProblemSolvingIcon
                            height="150px"
                            width="150px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Skills