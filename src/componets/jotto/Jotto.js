import React from 'react';
import Congrats from './Congrats'
import GuessedWord from './GuessedWord';

const gussedWords = [
  { gussedWord: "train", lettrMatchCount: 3 },
  { gussedWord: "agile", lettrMatchCount: 1 },
  { gussedWord: "party", lettrMatchCount: 5 }

];
export default function Jotto() {
  return (<div className='container' data-test="component-app">
    <h1>Jotto</h1>
    <Congrats  sucess={true} />
    <GuessedWord gussedWords={gussedWords} />
    </div>);
}
