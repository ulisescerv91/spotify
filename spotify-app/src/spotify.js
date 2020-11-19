//Spotify Logic
//* https://developer.spotify.com/documentation/android/quick-start/

const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = 'fb9f59077cd8434ba1f00680b19754ed';
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];//All the data we are goint to take from Spotify

export const getTokenFromUrl = () =>{
    return window.location.hash
            .substring(1)
            .split('&')
            .reduce( (initial, item)=>{
                //AccessToken=mySecretKey=name=ulises
                let parts = item.split('=')
                initial[parts[0]] = decodeURIComponent(parts[1])

                return  initial
            },{})
} 

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

