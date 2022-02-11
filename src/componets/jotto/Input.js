
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector  } from 'react-redux';

export default function Input({ secrectWord }) {
    const [currentGuess, setCurrentGuess] = React.useState("");
    const success =  useSelector(state=>state.success)

    if(success){
        return(<div data-test="component-input" />)
    }
    return <div data-test="component-input">
        <form className='form-inline'>
            <input
                data-test='input-box'
                className='mb-2 mx-sm-3'
                type="text"
                placeholder='Enter guess'
                value={currentGuess}
                onChange={(event) => setCurrentGuess(event.target.value)}
            />
            <button
                data-test="submit-button"
                onClick={() => setCurrentGuess("")}
                className='btn btn-primary mb-2'
                onClick={(event)=>{event.preventDefault();setCurrentGuess("")}}
            >Submit</button>
        </form>

    </div>;
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}