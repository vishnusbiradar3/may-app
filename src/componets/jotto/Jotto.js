import React from 'react';
import { useEffect } from 'react';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getScretWord } from './actions';



const gussedWords = [
  { gussedWord: "train", lettrMatchCount: 3 },
  { gussedWord: "agile", lettrMatchCount: 1 },
  { gussedWord: "party", lettrMatchCount: 5 }

];
export default function Jotto() {

  const success = false;
  const secretWord = 'party';
  const gussedWords = [];
  useEffect(() => {
    getScretWord();
  }, [])
  return (<div className='container' data-test="component-app">
    <h1>Jotto</h1>
    <Congrats sucess={true} />
    <Input success={success} secretWord={secretWord} />
    <GuessedWords gussedWords={gussedWords} />
  </div>);
}
