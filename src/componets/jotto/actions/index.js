import axios from 'axios';

export const getScretWord=()=>{

return axios.get('http://localhost:3030')
.then(response=>response.data);
}