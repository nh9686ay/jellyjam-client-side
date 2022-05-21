import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import './App.css';


function App() {

  const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
  const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])

  useEffect(() => {
    async function fetchData() {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      const res = await axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
          'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
          'Content-Type': "application/x-www-form-urlencoded"
        },
      })
      setToken(res.data.access_token)
    }
    fetchData();
  }, [])

  const searchSpotify = async (e) => {
    e.preventDefault()
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: 'artist'
      }
    })
    setArtists(data.artists.items)
  }

  //     const searchAlbums = async () => {
  //         e.preventDefault()
  //         const {data} = await axios.get("https://api.spotify.com/v1/search", { 
  //             headers: { 
  //                 Authorization: `Bearer ${token}`
  //             },
  //             params: {
  //                 q: searchKey,
  //                 type: "album"
  //             }
  //         })
  //         console.log(data)
  //         setAlbums(data.albums.items)
  //     }
  //     searchAlbums()
  // }

  const renderArtists = () => {
    artists.map((artist, i) => {
      {
        artists ? artists.map(artist => {
          return (
            <div key={i}>

              <h1>{artist.name}</h1>
              <h3>{artist.followers.total}</h3>
              <a href={artist.external_urls.spotify} >Link to page</a>
              <br></br>
              {
                artist.images.length ? <img width={"300px"} src={artist.images[0].url} alt='' />
                  : <div>No Images</div>
              }
              {console.log(artist)}
            </div>
          )
        })
          : <h2>Search for artist</h2>
      }
    })
  }
  return (
    <div className="App">
      <h1>SPOTIFYYY!!!!</h1>
      <form onSubmit={searchSpotify}>
        <input type="text" placeholder="Search for artist" onChange={e => setSearchKey(e.target.value)} />
        <button type={"submit"} >Search</button>
      </form>
      {renderArtists()}
      {/* {artists && <h1>{artists[0].name}</h1>} */}
      {artists ? artists.slice(0, 3).map(artist => {
        return (
          <div>
            <h1>{artist.name}</h1>
            <h3>{artist.followers.total}</h3>
            <a href={artist.external_urls.spotify} >Link to page</a>
            <br></br>
            {
              artist.images.length ? <img width={"300px"} src={artist.images[0].url} alt='' />
                : <div>No Images</div>
            }
            {console.log(artist)}
          </div>
        )
      })
        : <h2>Search for artist</h2>
      }
    </div>
  );
}

export default App;
