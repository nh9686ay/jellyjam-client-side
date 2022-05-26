import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
<<<<<<< HEAD
import '../assets/css/searchpage.css'
=======
import ArtistCard from '../components/ArtistCard';
import SongCard from '../components/SongCard';
import AlbumCard from '../components/AlbumCard';
// import Layout from '../components/layout/Layout';
import SideNav from '../components/SideNav';
import '../assets/css/searchpage.css';
>>>>>>> 75cce32056d045655275d3d4fbfc7985fd11dc24

function SearchPage() {
  const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
  const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])
<<<<<<< HEAD
  // const [albums, setAlbums] = useState([])
  // const [songs, setSongs] = useState([])
=======
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [searched, setSearched] = useState(false)
>>>>>>> 75cce32056d045655275d3d4fbfc7985fd11dc24

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

  const searchArtist = async (e) => {
    e.preventDefault()
<<<<<<< HEAD
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: 'artist'
      }
    })
    console.log(data)
    setArtists(data.artists.items)
  }

      // const searchAlbums = async (e) => {
      //     e.preventDefault()
      //     const {data} = await axios.get("https://api.spotify.com/v1/search", { 
      //         headers: { 
      //             Authorization: `Bearer ${token}`
      //         },
      //         params: {
      //             q: searchKey,
      //             type: "album"
      //         }
      //     })
      //     console.log(data)
      //     setAlbums(data.albums.items)
      // }

  

  return (
    <div>
      <div className="searchContainer">
      <form  onSubmit={searchArtist}>
        <input className='searchBar' type="text" placeholder="Search for artist" onChange={e => setSearchKey(e.target.value)} />
        <button className="searchButton" type={"submit"} >Search</button>
      </form>
      </div>
      {artists ? artists.slice(0, 3).map(artist => {
        return (
          <div>
            <h1>{artist.name}</h1>
            <h3>{artist.followers.total}</h3>
            <a href={artist.external_urls.spotify} >Link to page</a>
            <br></br>
=======
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
>>>>>>> 75cce32056d045655275d3d4fbfc7985fd11dc24
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
<<<<<<< HEAD

=======
>>>>>>> 75cce32056d045655275d3d4fbfc7985fd11dc24
          </div>
        </div>
      </main>
    </div>
  )
}

export default SearchPage;