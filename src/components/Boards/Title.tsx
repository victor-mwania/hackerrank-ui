import React from 'react';

function Title (props:any) {
    
    const { title } = props
    return (
        <React.Fragment>
            <h4>{title}</h4>
        </React.Fragment>
    )
}


export default Title