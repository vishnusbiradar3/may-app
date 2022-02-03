import React from 'react';
import PropType from 'prop-types';


export default function GuessedWords(props) {
    let contents;
    if (props.gussedWords.length === 0) {

        contents = (<span data-test="guss-word">Try to guess the secret word!</span>);
    } else {
        const guessedWordsRow = props.gussedWords.map((word, index) => (

            <tr data-test="gussed-word" key={index}>
                <td>{word.gussedWord}</td>
                <td>{word.lettrMatchCount}</td>
            </tr>
        ));
        contents = (
            <div data-test="gussed-words" className="table-responsiv">
                <h3>Gussed Words </h3>
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matching Letter</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRow}
                    </tbody>
                </table>

            </div>

        )

    }
    return <div data-test="component-gussed-words">{contents}</div>;
}
GuessedWords.prototype = {
    gussedWords: PropType.arrayOf(
        PropType.shape({
            GuessedWord: PropType.string.isRequired,
            lettrMatchCount: PropType.number.isRequired,
        })
    ).isRequired,

}