import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
  const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';
  let access_token;

  const [artists, setArtists] = useState([])

  
  const spotifyAuth = async() => {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      const res = await axios.post('https://accounts.spotify.com/api/token', params, {
          headers: {
              'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
              'Content-Type': "application/x-www-form-urlencoded"
            },
      })
    access_token = res.data.access_token
  }

  useEffect(() => {

    const hash = window.location.hash
        let token = window.localStorage.getItem('token')

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith('access_token')).split('=')[1]
            console.log(token)

            window.location.hash = ''
            window.localStorage.setItem('token', token)
            
        }
        access_token = token
        // setToken(token)
    // spotifyAuth();

    const searchSpotify = async() => {
        const res = await axios.get('https://api.spotify.com/v1/search?q=drake&type=artist&limit=50', {
            headers: {
                'Authorization': 'Bearer ' + access_token
              }
        })
        console.log(res)
        await setArtists(res.data)
        console.log(artists)
    }
    searchSpotify()


  }, [])
  
  
  

  return (
    <div className="App">

    </div>
  );
}

export default App;
