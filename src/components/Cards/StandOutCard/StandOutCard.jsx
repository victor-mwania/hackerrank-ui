import React from 'react';
import './../mid-cards.scss';
import './StandOutCard.scss'

function StandOutCard () {

    return (
        <React.Fragment>
            <div className="min_card stand_out_card">
                <h3>Stand out from the crowd</h3>
                <p>Take the HakcerRank Skills Certification Test and make your profile stand out </p>
                <div className =" card_button">
                    <button>
                        View All Skills
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StandOutCard;