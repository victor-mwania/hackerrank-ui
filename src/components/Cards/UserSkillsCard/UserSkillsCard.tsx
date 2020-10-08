import React from 'react';
import './UserSkillsCard.scss'

function UserSkillCard (props:any) {

    const { header, sub_header, summary, tutorial_button, kitStyles } = props;
   
    return (
        <React.Fragment>
            <div className="user_skill_card">
                <div className="user_skill_card_header">
                    <h5>{ header}</h5>
                </div>
                <div className="user_skill_card_sub_header">
                    <h4>{sub_header}</h4>
                </div>
                <div className="user_skill_card_summary">
                    <p>{summary}</p>
                </div>
                <div className="user_skill_card_button"style={kitStyles}> 
                    {tutorial_button}
                </div>                
            </div>
        </React.Fragment>
    )
}

export default UserSkillCard;