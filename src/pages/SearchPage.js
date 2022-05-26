import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import '../assets/css/searchpage.css'
import ArtistCard from '../components/ArtistCard';
import SongCard from '../components/SongCard';
import AlbumCard from '../components/AlbumCard';
// import Layout from '../components/layout/Layout';
import SideNav from '../components/SideNav';


function SearchPage() {
  const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
  const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [searched, setSearched] = useState(false)

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
    const searchArtists = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: "artist"
        }
      })
      setArtists(data.artists.items)
    }
    const searchAlbums = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: "album"
        }
      })
      console.log(data)
      setAlbums(data.albums.items)
    }
    const searchSongs = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: "track"
        }
      })
      setSongs(data.tracks.items)
    }
    setSearched(true)
    searchArtists()
    searchAlbums()
    searchSongs()
  }


  return (
    <div className='pageContainer'>
      <div className='sideNav'>
        <SideNav />
      </div>
      <main className='main'>
        <div className='searchBarStaticDiv'>
        <form className='form' onSubmit={searchSpotify}>
          <input className="searchBar" type="text" placeholder="Search for artist" onChange={e => setSearchKey(e.target.value)} />
          <button className="searchButton" type={"submit"}>Search</button>
        </form>
        </div>
        <div className='entirePage'>
          <div className='searchResults'>
            {
              searched ? <ArtistCard artists={artists} />
              : null
                // : <GenreCards />
            }
            {
              searched ? <SongCard songs={songs} />
                : null
            }
            {
              searched ? <AlbumCard albums={albums} />
                : null
            }

          </div>
        </div>
      </main>
    </div>
  )
}

export default SearchPage;