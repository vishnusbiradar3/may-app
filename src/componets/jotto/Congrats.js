import React from 'react';
import {PropTypes} from 'prop-types';


export default function Congrats(props){
    if (props.sucess) {
        return (<div data-test="coponent-congrats">
            <span data-test="congrats-message">
                Congratulations! You ussed the word!
            </span>
        </div>);
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }
}

Congrats.propTypes={
    sucess: PropTypes.bool.isRequired,
}