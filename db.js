const BASE_URL = 'https://notesproject-56e1.restdb.io/rest/students';
const API_KEY = '62a4a6a21a51777906aff956';

export function GetStudents(){
    let result = []
    return fetch(BASE_URL,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        }
    )
    .then(response => response.json())
    .then(events => events.map(item => {
        result.push(item)
    }))
}