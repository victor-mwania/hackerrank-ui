import React from 'react';
import './../mid-cards.scss'
import './SkillCard.scss';

function SkillCard(props:any) {

    const {title1, title2, iconSrc} = props
        return(
        <React.Fragment>
            <div className="min_card skill_card">
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
                    <img src={iconSrc} height="150px" width="150px" alt="icon"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SkillCard