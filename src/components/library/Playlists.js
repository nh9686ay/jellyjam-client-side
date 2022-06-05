import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaylistDis from './PlaylistDis'

function Playlists() {

    const [playlistsLib, setPlaylistsLib] = useState([])

    const fetchPlaylists = async () => {

        const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
            ? "https://jellyjam-server.herokuapp.com/playlist/playlistlibrary"
            : "playlist/playlistlibrary" 
        const { data } = await axios.get(url)
        console.log(data)
            
        setPlaylistsLib(data) 
    }

    useEffect(() => {
        fetchPlaylists()
    }, [])

    if(!playlistsLib.length) {
        return (
            <div>
                <h1>Loading... Playlists</h1>
                <h3>If you dont have any playlists, please make one.</h3>
            </div>
        )
    }

  return (
    <div>
        <div>
            <h1>Playlists</h1>
        </div>

        <div>
            <PlaylistDis playlists={playlistsLib} fetchPlaylists={fetchPlaylists} />
        </div>

    </div>
  )
}

export default Playlists