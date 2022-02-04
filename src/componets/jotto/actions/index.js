import axios from 'axios';

export const actionType ={
    CORRECT_GUESS:'CORRECT_GUESS'
}

export function correctGuess() {
    return {type:actionType.CORRECT_GUESS};
}

export const getScretWord=()=>{

return axios.get('http://localhost:3030')
.then(response=>response.data);
}