import React from 'react';
import './TutorialCard.scss'

function TutotialCard (props:any) {

    const { header, sub_header, summary, tutorial_button } = props;
    return (
        <React.Fragment>
            <div className="tutorial_card">
                <div className="header">
                    <h5>{ header}</h5>
                </div>
                <div className="sub_header">
                    <h4>{sub_header}</h4>
                </div>
                <div className="summary">
                    <p>{summary}</p>
                </div>
                <div className="tutorial_button">{tutorial_button}</div>
            </div>
        </React.Fragment>
    )
}

export default TutotialCard;