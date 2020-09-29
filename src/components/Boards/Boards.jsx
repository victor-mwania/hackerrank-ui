import React from 'react';
import './Boards.scss'
import Skills from '../Skills/Skills';

function Boards () {
    return(
        <React.Fragment>
            <div className="board">
                <Skills/>
            </div>
        </React.Fragment>
    )
}

export default Boards