import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import ArtistCard from '../components/ArtistCard';
import SongCard from '../components/SongCard';
import AlbumCard from '../components/AlbumCard';
import SideNav from '../components/SideNav';
import GenreCards from '../components/GenreCards';
import '../assets/css/searchpage.css';

function SearchPage() {
  const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
  const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [searched, setSearched] = useState(false)
  const [genres, setGenres] = useState([])

  const fetchData = useCallback(async () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    const res = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': "application/x-www-form-urlencoded"
      },
    })
    setToken(res.data.access_token)
    getGenreCards(res.data.access_token)
  }, [])

  const getGenreCards = async (token) => {
    const { data } = await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    setGenres(data.genres)
    console.log(data.genres)
  }

  useEffect(() => {
    fetchData();
  }, [])


  const searchSpotify = async (e) => {
    e.preventDefault()
    const searchArtists = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          "Authorization": `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: "artist"
        }
      })
      setArtists(data.artists.items)
    }

    const searchAlbums = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          'Authorization': `Bearer ${token}`
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
      <div className='navWrap'>
        <SideNav />
      </div>
      <div className='searchBarContainer'>
        <form onSubmit={searchSpotify}>
          <input type="text" placeholder="Search JellyJam for new music" 
            onChange={e => setSearchKey(e.target.value)} />
            {/* <button className="searchButton" type={"submit"}>Search</button> */}
        </form>

      </div>
      <main className='main'>
        {
          !searched && <GenreCards genres={genres} />
        }
        <div className="searchResults">
          {searched && (
            <>
              <h2>Artists:</h2>
              <ArtistCard artists={artists} />
            </>
          )}
          {searched && (
            <>
              <h2>Songs:</h2>
              <SongCard songs={songs} />
            </>
          )}
          {searched && (
            <>
              <h2>Albums:</h2>
              <AlbumCard albums={albums} />
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default SearchPage;