import React from 'react';
import PropType from 'prop-types';


export default function GuessedWord(props) {
    let contents;
    if(props.gussedWords.length ===0){

        contents=(<span data-test="guss-word">Try to guess the secret word!</span>);
    }
    return <div data-test="component-gussed-words">{contents}</div>;
}
GuessedWord.prototype = {
    gussedWords: PropType.arrayOf(
       PropType.shape( {
            GuessedWord: PropType.string.isRequired,
            lettrMatchCount: PropType.number.isRequired,
        })
    ).isRequired,

}